import mysql from 'mysql2'
import config from '../config.js'

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
})

export const addContact = ({name, phone:phone_number}) => {
    connection.query(`INSERT INTO contacts SET ?`, {name, phone_number:Number(phone_number)}, (err,result) => {
        if(err) throw err
        console.log(result);
    })   
}

export const getContacts = async () => {
    await connection.query(`SELECT * FROM contacts`, (err,result) => {
        if(err) throw err
        return result
    })  
}

//parece que siempre se mantiene conectado
export const connect = () => {
    connection.connect(err => {
        if(err) throw err
        console.log('conected!');
    })
}