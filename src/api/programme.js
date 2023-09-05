import axios from "@/lib/axios"

export const create = (data) => {
    return axios.request({
        url: "/programme/create",
        method: "post",
        data
    })
}

export const update = (data) => {
    return axios.request({
        url: "/programme/update",
        method: "post",
        data
    })
}

export const inverterGetAll = () => {
    return axios.request({
        url: "/inverter/getAll",
    })
}

export const list = (type) => {
    return axios.request({
        url: "/programme/" + type
    })
}

export const collection = (data) => {
    return axios.request({
        url: "/programme/collection",
        method: "post",
        data
    })
}

export const remove = (data) => {
    return axios.request({
        url: "/programme/delete",
        method: "post",
        data
    })
}

export const thoroughDelete = (data) => {
    return axios.request({
        url: "/programme/thoroughDelete",
        method: "post",
        data
    })
}

export const copy = (data) => {
    return axios.request({
        url: "/programme/copy",
        method: "post",
        data
    })
}

export const getOutPowerMin = (data) => {
    return axios.request({
        url: "/programme/getOutPowerMin",
        params: data
    })
}

export const chooseForm = (data) => {
    let form = new FormData()
    form.append("form_id", data.form_id)
    return axios.request({
        url: "/form/choseForm",
        method: "post",
        data: form
    })
}

export const selectProgrammeDetails = (data) => {
    return axios.request({
        url: "/programme/selectProgrammeDetails",
        params: data
    })
}

export const updateForm = (data) => {
    return axios.request({
        url: "/form/updateForm",
        data,
        method: "post"
    })
}

export const getShare = (id) => {
    return axios.request({
        url: "/share/" + id,
    })
}

export const share = (data) => {
    let fdata = new FormData()
    fdata.append("programmer_id", data.programme_id)
    fdata.append("range", data.range)
    return axios.request({
        url: "/share/getURL",
        method: "post",
        data: fdata
    })
}

export const updateState = (data) => {
    return axios.request({
        url: "/programme/updateState",
        data,
        method: "post"
    })
}

export const stateGet = () => {
    return axios.request({
        url: "/state/getAll"
    })
}

export const stateCreate = (data) => {
    return axios.request({
        url: "/state/create",
        method: "post",
        data
    })
}

export const stateDelete = (data) => {
    return axios.request({
        url: "/state/delete",
        method: "post",
        data
    })
}

export const updatePriceUnit = (data) => {
    return axios.request({
        url: "/programme/updatePriceUnit",
        method: "post",
        data
    })
}
