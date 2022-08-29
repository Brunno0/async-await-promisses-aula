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
    title: "Outra notícia",
    content: "conteúdo",
    date: Date.now()
};
const createNews = (news) => {
    return axios_1.default.put(`${baseURL}/news`, news);
};
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
    try {
        const requests = ids.map(id => axios_1.default.post(`${baseURL}/notifications`, {
            subscriberId: id,
            message: "Confira as últimas notícias!"
        }));
        yield Promise.all(requests);
        console.log(`Notifições enviadas`);
    }
    catch (error) {
        console.log(`Erro ao notificar assinantes`);
    }
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        yield createNews(news);
        const subscribers = yield getAllSubscribers();
        const ids = getSubscribersIds(subscribers);
        yield notifyAllSubscribers(ids);
    }
    catch (err) {
        console.log(((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) || err.message);
    }
});
main();
//# sourceMappingURL=ex5.js.map