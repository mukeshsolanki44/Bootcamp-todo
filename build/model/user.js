"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var userschema = new mongoose_1.Schema({
    email: { type: 'string', required: true, unique: true },
    name: { type: 'string', required: true, unique: true },
});
exports.default = mongoose_1.default.model('items', userschema);
