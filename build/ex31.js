"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
const news = {
    title: "Cachorro aluga barco a jato",
    content: "Um cachorro muito inteligente aluga um barco...",
    date: Date.now()
};
const createNews = (news) => {
    return axios_1.default.put(`${baseURL_1.URL_BASE}/news`, news);
};
const getAllSubscribers = () => {
    return axios_1.default.get(`${baseURL_1.URL_BASE}/subscribers`)
        .then(res => res.data);
};
const getSubscribersIds = (subscribers) => {
    return subscribers.map((sub) => {
        return sub.id;
    });
};
const notifyAllSubscribers = (ids) => {
    ids.push("idErrado");
    for (const id of ids) {
        axios_1.default.post(`${baseURL_1.URL_BASE}/notifications`, {
            subscribersId: id,
            message: "Temos novas noticias"
        })
            .then(() => { console.log(`Notificação enviada para: ${id}`); })
            .catch(() => { console.log(`Error ao enviar para: ${id}`); });
    }
};
createNews(news)
    .then(getAllSubscribers)
    .then(getSubscribersIds)
    .then(notifyAllSubscribers)
    .catch(erro => { var _a; return ((_a = erro.response) === null || _a === void 0 ? void 0 : _a.data) || erro.message; })
    .then(console.log);
console.log("outra coisa");
//# sourceMappingURL=ex31.js.map