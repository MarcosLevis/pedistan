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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('🚀 API Pedistan corriendo');
});
app.get('/health', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield db_1.pool.connect();
        yield client.query('SELECT NOW()');
        client.release();
        res.json({ status: 'ok', time: new Date() });
    }
    catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
}));
app.listen(port, () => {
    console.log(`⚡️ Server escuchando en puerto ${port}`);
});
