import store from "vuex"
import Vue from "vue"
Vue.use(store)

import router from "@/router"
import { setToken } from "@/lib/util"
import { getUserInfo, login, smsLogin, uploadImage } from "../api/user"
import { Message } from "element-ui"
export default new store.Store({
  state: {
    loginState: false,
    userInfo: {

    },
    userId: ""
  },
  getters: {
    //获取用户头像
    userCover(state) {
      return state.userInfo.user_pic || require("@/assets/images/default-user-cover.png")
    },
    //获取用户职位
    userJob(state) {
      return state.userInfo.job || "完善个人信息"
    },
    //获取用户职位2
    userJob2(state) {
      return state.userInfo.job || "未设置"
    },
    //获取用户名称
    userName(state) {
      return state.userInfo.realName || "未设置"
    },
    // 获取用户真实姓名
    userRealName(state) {
      return state.userInfo.realName || "未设置"
    },
    // 获取用户公司名称
    userCompany(state) {
      return state.userInfo.company || "未设置"
    },
    // 获取用户电话
    userMobilePhone(state) {
      return state.userInfo.mobilePhone
    },
    // 名片设置状态
    cardState(state) {
      if (state.userInfo.company && state.userInfo.realName && state.userInfo.job) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    loginIn(state) {
      state.loginState = true;
    },
    loginOut(state) {
      state.loginState = false;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo || {}
    },
    setUserId(state, userId) {
      state.userId = userId
    },
    disposeUserInfo(state) {
      state.userInfo = {}
      setToken()
    }
  },
  actions: {
    /**
     * @description 测试登录 如果登录失败跳转登录界面
     */
    async tryLogin(state) {
      if (true) {
        state.commit('setUserInfo', {})
      } else {
        router.replace({
          name: "login"
        })
      }
    },
    /**
     * @description 退出登录，跳转退登陆界面
     */
    async disposeUserInfo(state) {
      state.commit('disposeUserInfo')
    },
    /**
     * @description 密码登录,成功跳转登录界面
     */
    async login(state, data) {
      let res = await login(data)
      Message({
        message: '登录成功',
        type: 'success'
      });
      state.commit('setUserId', res.data.userId)
      setToken(res.data.token)
      router.push({
        name: "workspace"
      })
      state.dispatch("getUserInfoToState")
    },
    /**
     * 验证码登录
     * @param {*} state 
     * @param {*} data 
     */
    async smsLogin(state, data) {
      let res = await smsLogin(data)
      Message({
        message: '登录成功',
        type: 'success'
      });
      state.commit('setUserInfo', res.data.userInfo)
      state.commit('setUserId', res.data.userId)
      setToken(res.data.token)
      router.push({
        name: "workspace"
      })
    },
    /**
     * 获取用户信息
     * @param {*} state 
     */
    async getUserInfoToState(state) {
      let result = await getUserInfo();
      state.commit('setUserInfo', result.data.userInfo)
    },
    async setUserCover(state, data) {
      let res = uploadImage(data);
      console.log(res);
    }
  }
})
