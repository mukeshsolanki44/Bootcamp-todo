"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb+srv://boottodo:boottodo@cluster0-xai5k.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
exports.default = mongoose_1.default;
