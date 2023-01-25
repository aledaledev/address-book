import mysql from 'mysql2'
import config from '../config'

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
})

export const connect = () => {
    connection.connect(err => {
        if(err) throw err
        console.log('conected!');
    })
}