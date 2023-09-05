import axios from "axios"
import { getToken } from "@/lib/util/index"
import router from "@/router"
import { Message } from "element-ui"
let instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_HTTP_BASE_URL,
    timeout: 100000,
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }
})

//请求携带token
instance.interceptors.request.use(function (config) {
    config.headers['Authorization'] = getToken()
    return config;
});

instance.interceptors.response.use(data => {
    //成功返回信息
    if (data.data.code === 200) {
        return data.data
    } else {
        Message.error(data.data.msg)

        //如果未登录
        if (data.data.code === 401) {
            router.replace({
                name: "login"
            })
        }

        throw new Error(data.data.msg)

    }
})

export default instance

