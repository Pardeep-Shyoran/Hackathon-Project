import axios from "axios";

const instance = axios.create({
    baseURL: "https://fokus-backend-server.onrender.com/",
});

export default instance;