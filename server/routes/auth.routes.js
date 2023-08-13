const Router = require("express");
const Users = require("../models/Users.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("config")
const {check, validationResult} = require("express-validator")
const authMiddleware = require('../middleware/auth.middleware.js')


const router = new Router()


router.post('/registration', [
    check('password', "Пароль не соответствует размерам").isLength({min: 8, max: 15})
    
    ], async (req,res) => {
    try {
        const error = validationResult(req)
        

        if(!error.isEmpty()){
            return res.status(400).json({message: "ошибка валидации", error})
        }

        const {login, password} = req.body

        const condidate = await Users.findOne({login})

        if (condidate) {
            return res.status(400).json({message: `Имя пользователя ${login} уже занято`})
        }

        const hashPassword = await bcrypt.hash(password, 8)
        const user =  new Users({login, password: hashPassword})
        await user.save()
        return res.json({message: "Пользователь успешно зарегестрирован!"})

    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.post('/login', async (req,res) => {
    try {
        const {login, password} = req.body
        const user = await Users.findOne({login})
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid){
            return res.status(400).json({message: "Invalid pass"})
        }
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
        return res.json({
            token,
            user: {
                id: user.id,
                login: user.login
            }
        })


    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.get('/auth', authMiddleware,
    async (req,res) => {
        try {
            const user = await Users.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    login: user.login
                }
            })



        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
})


module.exports = router
