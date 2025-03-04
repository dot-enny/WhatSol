import axios from 'axios';
import { useDefaultStore } from '../lib/DefaultStore';

const BASE_URL = 'https://7183-102-89-23-226.ngrok-free.app/';

export const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

// Response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Access token expired
            console.log(window.location.href)
            sessionStorage.removeItem('accessToken');
            useDefaultStore.getState().setPreviousRoute(window.location.pathname);
            alert('Your session has expired. Please log in again.');
            window.location.href = '/signin';
            console.log(window.location.href)
        }
        return Promise.reject(error);
    }
);

// Request interceptor
// api.interceptors.request.use(
//     (config) => {
//         const accessToken = sessionStorage.getItem('access_token');
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );