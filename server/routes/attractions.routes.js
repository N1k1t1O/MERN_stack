const Router = require("express");
const Attraction = require("../models/Attractions.js")



const router = new Router()

router.get('/getall', async (req,res) => {
    try {
        const attractions = await Attraction.find({});
        res.json(attractions);

    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

router.post('/poststate', async (req,res) => {
    try {
        const {name, city, body} = req.body
        const attraction =  new Attraction({name, city, body})
        await attraction.save()
        return res.json({message: "Post created"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

module.exports = router 