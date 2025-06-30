import axios from "axios";
import { STARWARS_API_BASE_URL } from "./starWars.js";

export const http = axios.create({
    baseURL: STARWARS_API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});
