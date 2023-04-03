const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const { getAllTechicians, searchTechicians, signUp, getHashedPassword, updatePhone, updatePassword, logIn, deleteTechnicianAccount } = require('../database/index.js')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/technicians', (req, res) => {
    getAllTechicians((result, error) => result ? res.json(result) : res.send(error))
})

app.get('/api/technicians/:city/:service', (req, res) => {
    searchTechicians(req.params.city, req.params.service, (result, error) => result ? res.json(result) : res.send(error))
})

app.get('/api/technicians/login/:userName/:password', (req, res) => {
    getHashedPassword(req.params.userName, (error, result) => {
        if (result !== []) {
            let equal = bcrypt.compareSync(req.params.password, result[0].password)
            equal ? logIn(req.params.userName, result[0].password, (error, result) => error ? res.send(error) : res.send("success")) : res.send("Invalid user")
        }
    })
});

app.post('/api/technicians/register', async (req, res) => {
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (req.body.password.match(lowerCase) && req.body.password.match(upperCase) && req.body.password.match(numbers) && req.body.password.length > 8) {
        let hashedPassword = await bcrypt.hash(req.body.password, 5)
        signUp(req.body.userName, hashedPassword, req.body.city, req.body.service, req.body.phone, (result, error) => result ? res.json(result) : res.send(error))
    }
    else {
        res.send("strong password required")
    }
})

app.put('/api/technicians/updatephone/:id', (req, res) => {
    updatePhone(req.params.id, req.body.phone, (result, error) => result ? res.json(result) : res.send(error))
})

app.put('/api/technicians/updatepass/:id', async (req, res) => {
    if (req.body.password === req.body.confirmPassword && req.body.password !== "") {
        let hashedPassword = await bcrypt.hash(req.body.password, 5)
        updatePassword(req.params.id, hashedPassword, req.body.confirmPassword, (error, result) => error ? res.send(error) : res.send('password changed'))
    }
    else {
        res.send('check password')
    }
})

app.delete('/api/technicians/delete/:id', (req, res) => {
    deleteTechnicianAccount(req.params.id, (result, error) => result ? res.json(result) : res.send(error))
})

app.listen(3000, () => console.log('server listening on 3000'))