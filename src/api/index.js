import axios from "@/lib/axios"
import { unctionparamsToFormData } from "../lib/util"

export const test=()=>{
    return axios.request({
        url:'rest'
    })
}
