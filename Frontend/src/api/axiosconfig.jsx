import axios from "axios";

const instance = axios.create({
    baseURL: "https://fokus-backend-server.onrender.com/",
    // baseURL: "http://localhost:3000/",
});

export default instance;