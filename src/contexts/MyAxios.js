import axios from "axios";

export const myAxios=axios.create({
    baseURL: 'https://localhost:8080.com',
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
})