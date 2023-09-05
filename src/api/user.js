import axios from "@/lib/axios"

/**
 * 通用登录
 * @param {*} param0 
 * @returns 
 */
export const login = ({ username, password }) => {
    return axios.request({
        url: "/user/login",
        method: "post",
        data: {
            username,
            password
        }
    })
}

/**
 * 短信验证码登录请求
 * @param {*} param0 
 * @returns 
 */
export const getLoginCode = ({ username }) => {
    return axios.request({
        url: "/user/smsLogin",
        params: { username },
    })
}

/**
 * 短信验证码登录
 * @param {*} param0 
 * @returns 
 */
export const smsLogin = ({ username, code }) => {
    return axios.request({
        url: "/user/smsLogin",
        method: "post",
        data: {
            username,
            code
        }
    })
}

/**
 * 短信验证码注册请求
 * @param {*} param0 
 * @returns 
 */
export const getRegisterCode = ({ username }) => {
    return axios.request({
        url: "/user/smsRegister",
        params: { username }
    })
}
/**
 * 注册
 */
export const smsRegister = ({ username, password, code }) => {
    return axios.request({
        url: "/user/smsRegister",
        method: "post",
        data: {
            username,
            password,
            code
        }
    })
}

/**
 * 验证码重置密码请求
 * @param {*} param0 
 * @returns 
 */
export const getResetSms = ({ username }) => {
    return axios.request({
        url: "/user/smsReset",
        params: { username }
    })
}

/**
 * 验证码重置密码
 * @param {*} param0 
 * @returns 
 */
export const smsResetPsw = ({ username, password, code }) => {
    return axios.request({
        url: "/user/smsReset",
        method: "post",
        data: {
            username,
            newPassword: password,
            code
        }
    })
}
/**
 * 上传头像
 * @param {*} param0 
 * @returns 
 */
export const uploadImage = (params) => {
    return axios.request({
        url: "/user/uploadHeaderImage",
        method: "post",
        data: params,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}
/**
 * 修改或添加用户信息
 * @param {*} param0 
 * @returns 
 */
export const updateUserInfo = ({ name, company, job, }) => {
    return axios.request({
        url: "/user/updateUserInfo",
        method: "post",
        data: {
            realName: name, company, job
        }
    })
}

/**
 * 查询用户信息
 * @param {*} param0 
 * @returns 
 */
export const getUserInfo = () => {
    return axios.request({
        url: "/user/selectUserInfo",
    })
}


export const shareGetURL=()=>{
    return axios.request({
        method:"post",
        url:"/share/getURL"
    })
}

export const getUrl=(url)=>{
    return axios.request({
        url:"/share/"+url
    })
}