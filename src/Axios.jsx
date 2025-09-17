import axios from "axios";

const Instance = axios.create({
    baseURL: "http://13.232.71.99/api",
    withCredentials: true
})
export default Instance