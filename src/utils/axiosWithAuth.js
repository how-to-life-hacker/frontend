import axios from 'axios';

export function axiosWithAuth() {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://life-hacker-backend.herokuapp.com",
        headers: {
            Authorization: token
        }
    });
};