const articles = require("../models/articles")
const express = require("express");
const app = express();
const router = express.Router()

router.use(express.urlencoded())

router.get('/all', (req, res) =>{
    articles.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err))

})

router.get('/:id', (req,res) =>{
    const id=req.params.id
    articles.findById(id)
        .then((result) => console.log(result))

    articles.updateOne(id, {$inc: {views: 1} })
})

router.delete('/:id', (req,res) =>{
    const id=req.params.id
    articles.findByIdAndDelete(id)
})

router.post('/',(req, res)=>{
    const newArticle = new articles(req.body)

    newArticle.save()
        .then((result) => res.redirect('/'))
})

router.put('/:id',(req,res) =>{
    const updatedArticle = req.body

    const id=req.params.id
    articles.updateOne(id, updatedArticle)
})

router.post('/:id/like',(req, res)=>{
    const id=req.params.id

    articles.updateOne(id, {$inc: {likes: 1} })
})

router.delete('/:id/like',(req, res)=>{
    const id=req.params.id

    articles.updateOne(id, {$inc: {likes: -1} })
})

router.get('/trending', (req, res) =>{
    articles.find().sort("views")
        .then((result) => console.log(result))
})

module.exports= router