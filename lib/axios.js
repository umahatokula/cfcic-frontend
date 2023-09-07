import { logOut } from '@/app/utils/auth'
import axios from 'axios'

export default function api() {
    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000',
        withCredentials: true
    })

    // api.interceptors.response.use(response => response, error => {
    //     if (error?.response?.status === 401) {
    //         console.log('error?.response?.status', error?.response?.status)
    //         logOut()

    //         return Promise.reject()
    //     }

    //     return Promise.reject(error)
    // })

    return api
}