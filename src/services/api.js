import axios from "axios";

// 72152002/json/

export const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})