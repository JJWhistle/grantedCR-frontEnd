import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})

const pageAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/page`
})

export {
    clienteAxios,
    pageAxios
};