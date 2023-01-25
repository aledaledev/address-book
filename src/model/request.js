import { getConnection } from "./database.js";

export const addContact = async ({name, phone:phone_number}) => {
    const connection = await getConnection()
    await connection.query(`INSERT INTO contacts SET ?`, {name, phone_number:Number(phone_number)}, (err,result) => {
        if(err) throw err
        console.log(result);
    })   
}

/*
//no esta permitido callback usando se quiere guardar el resultado
const result = connection.query(`SELECT * FROM contacts`, (err,result) => {
    if(err) throw err
    console.log(result);
})
*/

export const getContacts = async () => {
    const connection = await getConnection()
    const result = await connection.query(`SELECT * FROM contacts`)
    return result[0]
}

export const removeContact = async (id) => {
    const connection = await getConnection()
    const result = await connection.query(`DELETE FROM contacts WHERE id = ?`, id)
    console.log(result[0].affectedRows)
}