const express = require('express')
const app = express.Router()
const User = require('../models/userModel')

app.use(express.json());

app.get('/getUsers', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {
        res.send(err)
    }
})

app.get('/getUser/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (err) {
        res.send(err)
    }
})

app.post('/createUser', async (req, res) => {
    const newUser = new User({
        pseudo: req.body.pseudo,
        age: req.body.age,
        sexe: req.body.sexe
    })

    try {
        await newUser.save()
        res.send('utilisateur ajouté !')
    } catch (err) {
        res.send(err)
    }
})

app.put('/updateUser/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.pseudo = req.body.pseudo
        user.age = req.body.age
        user.sexe = req.body.sexe
        await user.save()
        res.send('Utilisateur modifié')
    } catch (err) {
        res.send(err)
    }
})

app.delete('/deleteUser/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        user.delete()
        res.send('Utilisateur supprimé')
    }catch(err){
        res.send(err)
    }
})

module.exports = app