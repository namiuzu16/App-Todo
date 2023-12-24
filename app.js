const express = require("express")
const db = new Map()
// const db = require('./db.js')
const app = express()

// const bodyParser = require('body-parser')

const port = 3000

app.use(express.json())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send("Halo dunia yang kejam")
})

app.post('/todos', (req, res) => {

    db.set("123", req.body)
   
    // const title = req.body.title

    return res.json({"Succes create todo: " : req.body})
})

app.get('/todos/:id', (req, res) => {
    const id = req.params.id

    const data = db.get(id)
    console.log (data);
    return res.json(data)
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id

    const data = db.delete(id)
    console.log (data);
    return res.json({message: "Success delete todo"})
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id
    db.set(id, res.body)
    return res.json({message: "Success update todo"})
})

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id
    const existingTitle = db.get(id);
    const updateTitle = {title: req.body.title, description: existingTitle.description};
    db.set(id, updateTitle);

    return res.json({message: "Success update title"})
})


app.listen(port, () => {
    console.log('Listen on localhost:' + port)
})