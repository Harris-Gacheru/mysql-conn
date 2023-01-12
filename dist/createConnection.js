"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConnect = () => {
    let connection = mysql_1.default.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DB,
        port: process.env.HOSTPORT
    });
    connection.connect((err) => {
        if (err)
            throw err;
        console.log('Connected successfully');
    });
    return connection;
};
exports.default = dbConnect;
//# sourceMappingURL=createConnection.js.map