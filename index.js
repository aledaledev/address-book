import express from 'express'
import {connect, addContact, getContacts} from './src/model/database.js'

//se muestra de lado del equipo/terminal (servidor)
const app = express()

app.set('views','./views')
app.set('view engine', 'pug')

app.use(express.static('./views'))
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get('/', async (req,res) => {
    res.render('index', {title: "puggy", contacts: await getContacts()})
})

app.get('/add/:name/:phone', (req,res) => {
    const {name, phone} = req.params
    addContact({name,phone})    
    res.redirect('/')
})

app.use((req,res) => {
    res.status(404).json({message:"Page not found!"})
})

app.listen(3000, () => {
    //esta
    connect()
    console.log(`Server running on port 3000`);
})