import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
import { Message } from "element-ui"
import routes from "./routes"
import { stateGet } from "@/api/programme"
import { getToken } from "@/lib/util"

import { NEED_LOGIN_ROUTER_NAMES } from "@/constant"
import store from "../store"
import { getUserInfo } from "../api/user"

let router = new Router({
  routes
})

const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace

Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Router.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}


router.beforeEach(async (to, from, next) => {
  let token = getToken();
  if (store.state.loginState) {
    next();
    return
  }

  if (NEED_LOGIN_ROUTER_NAMES.includes(to.name)) {
    if (token) {
      try {
        let res = await getUserInfo();
        if (res.code == 200) {
          store.commit("setUserInfo", res.data.userInfo)
          store.commit("loginIn");
          next()
          return
        }
      } catch (error) {
        Message.error("请登录")
        next({
          path: "/login"
        })
        return
      }
    }
    Message.error("请登录")
    next({
      path: "/login"
    })
    return
  }
  next()
})

export default router