import axios from 'axios';
import { URL_BASE } from './baseURL'


axios.get(`${URL_BASE}/subscribers/2/notifications`)  
.then(res => res.data) 
.then(console.log)
.catch(error => error.response.data || error.message)
.then(console.log)
// Vamos melhorar esse catch
console.log("-----> outra tarefa sendo realizada")