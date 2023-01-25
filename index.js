import express from 'express'
import { addContact, getContacts,removeContact } from './src/model/request.js'

//se muestra de lado del equipo/terminal (servidor)
const app = express()

app.set('views','./views')
app.set('view engine', 'pug')

app.use(express.static('./views'))
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get('/', async(req,res) => {
    const contacts = await getContacts()
    res.render('index', {title: "puggy", contacts})
})

app.get('/add/:name/:phone', async (req,res) => {
    const {name, phone} = req.params
    await addContact({name,phone})    
    res.redirect('/')
})

app.get('/delete/:id', async (req,res) => {
    const {id} = req.params
    await removeContact(id)
    res.redirect('/')
})

app.use((req,res) => {
    res.status(404).json({message:"Page not found!"})
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})