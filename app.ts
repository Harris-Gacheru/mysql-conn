import mysql from 'mysql'
import * as  dotenv from 'dotenv'
dotenv.config()

let con = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT as unknown as number,
    user: process.env.USER,
    password: process.env.PASS
})

con.connect((err: any) => {
    if (err) throw err
    console.log('Connected succefully')    
})

// let pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASS,
//     database: process.env.DB,
//     port: process.env.PORT as unknown as number
// })

// pool.getConnection((err, connection) => {
//     if(err) throw err

//     if (connection) {
//         console.log('Connected succesfully');
//         connection.release()
//         return
//     }
// })

// pool.query('SELECT 1 + 1 AS solution', function (error, results) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution)
// })