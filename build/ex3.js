"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
const baseURL = baseURL_1.URL_BASE;
const news = {
    title: "Brasil conquista hexa no catar",
    content: "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás",
    date: Date.now()
};
const createNews = (news) => {
    return axios_1.default.put(`${baseURL}/news`, news);
};
const getAllSubscribers = () => {
    return axios_1.default
        .get(`${baseURL}/subscribers`)
        .then(res => res.data);
};
const getSubscribersIds = (subscribers) => {
    return subscribers.map((subscriber) => {
        return subscriber.id;
    });
};
const notifyAllSubscribers = (ids) => {
    ids.push("idInexistente");
    let count = 0;
    for (const id of ids) {
        count++;
        axios_1.default.post(`${baseURL}/notifications`, {
            subscriberId: id,
            message: "Olá, há uma nova notícia em nosso site"
        })
            .then(() => { console.log(`${count} : Notificação enviada a ${id}`); })
            .catch(() => { console.log(`Erro ao enviar para ${id}`); });
    }
};
createNews(news)
    .then(getAllSubscribers)
    .then(getSubscribersIds)
    .then(notifyAllSubscribers)
    .catch(erro => { var _a; return ((_a = erro.response) === null || _a === void 0 ? void 0 : _a.data) || erro.message; })
    .then(console.log);
console.log("outra coisa");
//# sourceMappingURL=ex3.js.map