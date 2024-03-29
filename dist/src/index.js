"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Route_1 = __importDefault(require("./Routes/Route"));
require("dotenv/config");
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
const { urlencoded } = express_1.default;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(urlencoded({ extended: false }));
app.use('/api', Route_1.default);
// connectDb();
// app.listen(port, () => console.log(`port running on ${port}`))
(0, db_1.default)().then(() => {
    app.listen(port, () => {
        console.log(`port running on ${port}`);
    });
});
//# sourceMappingURL=index.js.map