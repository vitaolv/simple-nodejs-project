"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const root = express_1.default.Router();
root.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '..', '..', '..', 'frontend', 'dist', 'index.html'));
});
root.use('/assets', express_1.default.static(path_1.default.resolve(__dirname, '..', '..', '..', 'frontend', 'dist', 'assets')));
exports.default = root;
