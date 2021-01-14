const router = require('express').Router()
const Blog = require('../models/blog')


router.get('/blog/:id', async(req, res) => {

  const {id} = req.params

  const getBlog = await Blog.findOne({_id: id})

  res.render('particularBlog', {blog:getBlog})

})

router.get('/delete/:id', (req, res) => {
  
  const {id} = req.params
  Blog.deleteOne({_id: id})
  .then(()=>{
    console.log("Le blog a ete supprimer avec succes")
    res.redirect('/')
  })
  .catch(err => console.log(err))
})


router.get('/edit/:id', async(req, res) => {
  
  const {id} = req.params

  const getData = await Blog.findOne({_id: id})
  res.render('editBlog', {blog:getData})

})

router.post('/edit/:id', (req, res) => {
  const {id} = req.params
  const {title, content} = req.body

  Blog.updateOne({_id: id}, {title, content})
  .then( () => {
    console.log("Le blog a ete modifier avec succes")
    res.redirect('/')
  })
  .catch( err => console.log(err))

});


module.exports = router