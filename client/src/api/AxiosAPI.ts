import axios from "axios";
import { getTokenFromLocalStorge } from "../helpers/LocalStorage";

export const API = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: 'Bearer ' + getTokenFromLocalStorge(), 
    },
})

