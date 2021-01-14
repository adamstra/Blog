const router = require("express").Router()
const Blog = require('../models/blog');

router.get('/', async(req, res) => {

  const allBlogs = await Blog.find()
  console.log(allBlogs)

  res.render('index', {blogs: allBlogs})
})

module.exports = router