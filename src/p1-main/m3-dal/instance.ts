import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://localhost:7542/3.0',
    withCredentials: true
})

export const AuthAPI = {
    login: (email: string, password: string, rememberMe?: boolean) => {
        return instance.post('/auth/login', {email, password, rememberMe})
    },
    me: () => {
        return instance.post('/auth/me', {})
    }
}