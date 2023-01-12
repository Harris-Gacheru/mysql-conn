"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const router = express_1.default.Router();
router.get('/', (req, res) => res.send('Users route working...'));
router.post('/add', users_controller_1.createUser);
router.get('/users', users_controller_1.getUsers);
router.get('/users/:id', users_controller_1.getUser);
router.patch('/users/:id', users_controller_1.updateUser);
router.delete('/users/:id', users_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map