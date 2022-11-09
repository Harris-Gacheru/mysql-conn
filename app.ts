import mysql from 'mysql'
import * as  dotenv from 'dotenv'
dotenv.config()

let con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS
})

con.connect((err: any) => {
    if (err) throw err
    console.log('Connected succefully')    
})