import { axiosWithAuth } from './axiosWithAuth';

export function fetchAPI() {
    return axiosWithAuth()
        .post('/howto')
        .then(res => {
            return res
        })
        .catch(err => console.log(err.message))
}