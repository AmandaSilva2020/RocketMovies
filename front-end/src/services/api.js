import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-api-isg2.onrender.com"
});