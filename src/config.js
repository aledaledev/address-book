import {config} from 'dotenv'

config()

export const PORT = process.env.PORT

export default {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}