"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
axios_1.default.get(`${baseURL_1.URL_BASE}/subscribers/2/notifications`)
    .then(res => res.data)
    .then(console.log)
    .catch(error => error.response.data || error.message)
    .then(console.log);
console.log("-----> outra tarefa sendo realizada");
//# sourceMappingURL=ex2.js.map