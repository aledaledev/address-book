import mysql from 'mysql2/promise'
import config from '../config.js'

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
})

//parece que es necesario cuando usamos mysql2/promise
export const getConnection = () => {
    return connection
}

//parece que siempre se mantenga conectado, usando solo mysql2
/*const connect = () => {
    connection.connect(err => {
        if(err) throw err
        console.log('conected!');
    })
}*/
