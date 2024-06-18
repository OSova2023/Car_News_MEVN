"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3500;
exports.MONGO = "mongodb://127.0.0.1:27017/articles?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.4";
