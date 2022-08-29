"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const createNews = (news) => __awaiter(void 0, void 0, void 0, function* () {
    return axios_1.default.put(`${baseURL}/news`, news);
});
const getAllSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${baseURL}/subscribers`);
    return response.data;
});
const getSubscribersIds = (subscribers) => {
    return subscribers.map((subscriber) => {
        return subscriber.id;
    });
};
const notifyAllSubscribers = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    ids.push("idInexistente");
    for (const id of ids) {
        try {
            yield axios_1.default.post(`${baseURL}/notifications`, {
                subscriberId: id,
                message: "Olá, há uma nova notícia em nosso site"
            });
            console.log(`Notificação enviada a ${id}`);
        }
        catch (erro) {
            console.log(`Erro ao enviar para ${id}`);
        }
    }
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        createNews(news);
        const subscribers = yield getAllSubscribers();
        const subscribersIds = getSubscribersIds(subscribers);
        yield notifyAllSubscribers(subscribersIds);
    }
    catch (error) {
        const resp = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message;
        console.log(resp);
    }
});
main();
//# sourceMappingURL=ex4.js.map