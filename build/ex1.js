"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
axios_1.default.get(`${baseURL_1.URL_BASE}/subscribers`)
    .then((res) => {
    return res.data;
})
    .then((res) => {
    console.log(res);
});
console.log("-----> outra tarefa sendo realizada");
//# sourceMappingURL=ex1.js.map