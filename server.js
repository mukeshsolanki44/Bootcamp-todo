"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = __importDefault(require("./build/config/database"));
var db = database_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("succcesdful");
});
var app = express_1.default();
app.listen(3003, function () {
    console.log("Chal ra ha");
});
app.get("/", function (req, res) {
    res.send({
        message: 'code is runing'
    });
});
console.log("express");
app.use(express_1.default.json());
app.use("/", require("./build/todo/getPost"));
