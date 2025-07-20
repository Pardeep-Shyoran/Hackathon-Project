// import axios from "../../api/axiosconfig";

// export const registerUser = async (user) => {
//     const existingUser = await axios.get(`${API_URL}?email=${user.email}`);
//     if (existingUser.data.length) {
//         throw new Error('Email already registered');
//     }
//     return axios.post(API_URL, user);
// };

// export const loginUser = async ({ email, password }) => {
//     const res = await axios.get(`${API_URL}?email=${email}&password=${password}`);
//     if (!res.data.length) {
//         throw new Error('Invalid credentials');
//     }
//     return res.data[0];
// };
