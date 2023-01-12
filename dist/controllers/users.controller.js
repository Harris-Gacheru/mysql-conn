"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
const createConnection_1 = __importDefault(require("../createConnection"));
const createUser = (req, res) => {
    try {
        const { name, email } = req.body;
        let conn = (0, createConnection_1.default)();
        conn.query(`INSERT INTO users(name, email)VALUES('${name}', '${email}')`, (error, results, fields) => {
            if (error)
                throw error;
            if (results.affectedRows == 1) {
                res.json({ success: true, message: 'User created successfully' });
            }
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.createUser = createUser;
const getUsers = (req, res) => {
    try {
        let conn = (0, createConnection_1.default)();
        conn.query('SELECT * FROM users', (error, results, fields) => {
            if (error)
                throw error;
            if (results.length == 0) {
                return res.json({ success: false, message: 'No users found' });
            }
            res.json({ success: true, data: results });
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    try {
        const id = req.params.id;
        let conn = (0, createConnection_1.default)();
        conn.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
            if (error)
                throw error;
            if (!results[0]) {
                return res.json({ success: false, message: 'User does not exist' });
            }
            res.json({ success: true, data: results[0] });
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.getUser = getUser;
const updateUser = (req, res) => {
    try {
        const id = req.params.id;
        const { name, email } = req.body;
        let conn = (0, createConnection_1.default)();
        conn.query(`SELECT * FROM users WHERE id = '${id}'`, (error, results) => {
            if (error)
                throw error;
            if (!results[0]) {
                return res.json({ success: false, message: 'User does not exist' });
            }
            conn.query(`UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${id}`, (error, results) => {
                if (error)
                    throw error;
                results.changedRows == 1 ? res.json({ success: true, message: 'User updated successfully' }) : res.json({ success: false, message: 'Failed to update' });
            });
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    try {
        const id = req.params.id;
        let conn = (0, createConnection_1.default)();
        conn.query(`SELECT * FROM users WHERE id = '${id}'`, (error, results) => {
            if (error)
                throw error;
            if (!results[0]) {
                return res.json({ success: false, message: 'User does not exist' });
            }
            conn.query(`DELETE FROM users WHERE id = ${id}`, (error, results) => {
                if (error)
                    throw error;
                results.affectedRows == 1 ? res.json({ success: true, message: 'User deleted successfully' }) : res.json({ success: false, message: 'Failed to delete' });
            });
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map