import express from 'express'

const app = express()

app.set('views','./views')
app.set('view engine', 'pug')

app.use(express.static('./views'))
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get('/', (req,res) => {
    res.render('index', {title: "pug vs pilu", text:"texto desde backend"})
})

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
})