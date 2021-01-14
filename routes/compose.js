const router = require('express').Router()
const Blog = require("../models/blog")

router.get('/compose', (req, res) => {

  res.render("composeBlog")
})

router.post('/compose', (req, res) => {
  const { title, content } = req.body
  
  // * Verifie si tt les champs on etais saisie ?
  if (!title || !content) {
    return res.send("Tout les champs doivent etre saissie 🌘")
  }

  const newBlog = new Blog({title, content})

  // Sauvegarder notre model dans la base de donnee
  newBlog.save()
  .then( () => {
    console.log("Le blog a ete ajouter !")
    res.redirect('/')
  })
  .catch(err => console.log(err))
})

module.exports = router