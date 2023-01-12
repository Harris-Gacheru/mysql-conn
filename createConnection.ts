import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config()

const dbConnect = () => {
    let connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DB,
        port: process.env.HOSTPORT as unknown as number
    })

    connection.connect((err: any) => {
        if(err) throw err
        console.log('Connected successfully')
    })

    return connection
}

export default dbConnect