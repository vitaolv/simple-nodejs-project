"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
router.use(express_1.default.static(path_1.default.resolve(__dirname, '..', '..', '..', 'frontend', 'dist')));
router.get('/test', (req, res) => {
    res.send('Test route');
});
router.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '..', '..', '..', 'frontend', 'dist', 'index.html'));
});
exports.default = router;
