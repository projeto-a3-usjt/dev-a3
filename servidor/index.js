const express = require('express')
const bodyParser = require("body-parser")

const app = express()
const port = 3000
app.use(bodyParser.json())
const UserController = require('./user/user.controller.js')
const QrController = require('./qr/qr.controller.js')

const userController = new UserController()
const qrController = new QrController()

app.get('/', (req, res) => {
    res.send('funcionando')
})

app.post('/admin/login', (req, res) => {
    userController.verificaUsuário(req, res)
})

app.get('/admin/cadastros', (req, res) => {
    userController.listaUsuários(req, res)
})

app.post('/admin/cadastros', (req, res) => {
    // espera um JSON com username, senha, tipo e nome
    userController.cadastraUsuário(req, res)
})

app.post('/mesa/:id/qr', (req, res) => {
    // espera um JSON com nome
    qrController.criaQr(req, res)
})

app.delete('/mesa/:id/qr', (req, res) => {
    qrController.limpaMesa(req, res)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})