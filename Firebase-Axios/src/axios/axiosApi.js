import axios from "axios"


// These will connect to firebase and we can use axioInstance in thunk.js
export const axiosInstance = axios.create({
    baseURL : "https://reudx-c4d48-default-rtdb.firebaseio.com/users", 
})