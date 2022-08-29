import axios from "axios"
import { URL_BASE } from "./baseURL"

const baseURL = URL_BASE
const news = {
    title: "Brasil conquista hexa no catar",
    content: "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás",
    date: Date.now()
}

const createNews = (news: any) => {
    return axios.put(`${baseURL}/news`, news)
}

const getAllSubscribers = () => {
    return axios
        .get(`${baseURL}/subscribers`)
        .then(res => res.data)
}

const getSubscribersIds = (subscribers: any) => {
    return subscribers.map((subscriber:any) => {
        return subscriber.id
    })
}

const notifyAllSubscribers = (ids: string[]) =>{
    ids.push("idInexistente") // Colocando um id inexistente no vetor a ser utilizado
    let count = 0
    for (const id of ids) {
        count++;
        axios.post(`${baseURL}/notifications`,{
            subscriberId: id,
	        message: "Olá, há uma nova notícia em nosso site"
        })
        .then(() => {console.log(`Notificação enviada a ${id}`)})
        .catch(() => {console.log(`Erro ao enviar para ${id}`)})
    }
}

createNews(news)                                            // Crio a noticia
    .then(getAllSubscribers)                                // Recupero todos inscritos
    .then(getSubscribersIds)                                // Recupero apenas os ids dos inscritos
    .then(notifyAllSubscribers)                             // Notifico todos inscritos
    .catch(erro => erro.response?.data || erro.message)     // Trato caso caia em erro
    .then(console.log)                                      // Imprimo o erro
console.log("outra coisa")