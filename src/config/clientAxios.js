import axios from "axios";
import { backendUrl } from './env';

const clientAxios = axios.create({
    baseURL: backendUrl()
})
 
export default clientAxios;