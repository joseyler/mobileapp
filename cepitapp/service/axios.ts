import axios from 'axios';
import { obtenerToken } from './secure-store';
let tokenSesion = '';

const createCliente = () => {
  const cliente = axios.create({
    baseURL: 'http://192.168.1.4:8000/',
  });
  return cliente;
}

const clienteAxios = createCliente();

export const updateTokenBackend = (token: string) => {
  tokenSesion = token;
}

clienteAxios.interceptors.request.use((request) => {
  if (tokenSesion) {
    request.headers.Authorization = `Bearer ${tokenSesion}`;
  }
  return request;
})

export default clienteAxios;