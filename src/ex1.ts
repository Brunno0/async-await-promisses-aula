import axios from 'axios';
import { URL_BASE } from './baseURL'

// Ex1 - 
axios.get (`${URL_BASE}/subscribers`) // pega a resposta 
.then((res) => { 
    return res.data}) // capturada a resposta, acessamos o res.data e passamos ele como entrada
.then ((res) => {
    console.log(res)})// para nosso pipeline console.log

console.log("-----> outra tarefa sendo realizada")



//parte 1 - explicar assincronidade 
// axios.get (`${URL_BASE}/subscribers`) // pega a resposta 
// .then(res => res.data) // capturada a resposta, acessamos o res.data e passamos ele como entrada
// .then (console.log)// para nosso pipeline console.log

// console.log("-----> outra tarefa sendo realizada")



//parte 2 explicar que o erro vem
// axios.get(`${URL_BASE}/subscribers/idquenaoexiste/notifications`) // pega a resposta 
// .then(res => res.data) // capturada a resposta, filtramos e pegamos apenas o res.data
// .then (console.log)
