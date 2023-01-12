import {RequestHandler} from 'express';
import dbConnect from '../createConnection';

export const createUser: RequestHandler = (req, res) => {
    try {
        const {name, email} = req.body as {name: string, email: string}

        let conn = dbConnect()

        conn.query(`INSERT INTO users(name, email)VALUES('${name}', '${email}')`, (error, results, fields) => {
            if(error) throw error

            if (results.affectedRows == 1) {
                res.json({success: true, message: 'User created successfully'})
            }
        })

    } catch (error: any) {
        res.json({error: error.message})
    }
}

export const getUsers: RequestHandler = (req, res) => {
    try {
        let conn = dbConnect()

        conn.query('SELECT * FROM users', (error, results, fields) => {
            if(error) throw error

            if (results.length == 0) {
                return res.json({success: false, message: 'No users found'})
            }
            res.json({success: true, data: results})
        })
    } catch (error: any) {
        res.json({error: error.message})
    }
}

export const getUser: RequestHandler<{id: string}> = (req, res) => {
    try {
        const id = req.params.id

        let conn = dbConnect()

        conn.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
            if(error) throw error

            if (!results[0]) {
                return res.json({success: false, message: 'User does not exist'})
            }
            res.json({success: true, data: results[0]})
        })
    } catch (error: any) {
        res.json({error: error.message})
    }
}

export const updateUser: RequestHandler<{id: string}> = (req, res) => {
    try {
        const id = req.params.id
        const {name, email} = req.body as {name: String, email: string}

        let conn = dbConnect()

        conn.query(`SELECT * FROM users WHERE id = '${id}'`,(error, results) => {
            if(error) throw error

            if(!results[0]){
                return res.json({success: false, message: 'User does not exist'})
            }

            conn.query(`UPDATE users SET name = '${name}', email = '${email}' WHERE id = ${id}`, (error, results) => {
                if(error) throw error

                results.changedRows == 1? res.json({success: true, message: 'User updated successfully'}) : res.json({success: false, message: 'Failed to update'})
            })
        })
    } catch (error: any) {
        res.json({error: error.message})
    }
}

export const deleteUser: RequestHandler<{id: string}> = (req, res) => {
    try {
        const id = req.params.id

        let conn = dbConnect()

        conn.query(`SELECT * FROM users WHERE id = '${id}'`,(error, results) => {
            if(error) throw error

            if(!results[0]){
                return res.json({success: false, message: 'User does not exist'})
            }

            conn.query(`DELETE FROM users WHERE id = ${id}`, (error, results) => {
                if(error) throw error
                
                results.affectedRows == 1? res.json({success: true, message: 'User deleted successfully'}) : res.json({success: false, message: 'Failed to delete'})
            })
        }) 
    } catch (error: any) {
        res.json({error: error.message})
    }
}