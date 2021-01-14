const express = require('express')
const mongoose = require('mongoose')

const app = express()


// ! Connection a MongoDB
mongoose.connect('mongodb+srv://user:user@cluster0.ezue8.mongodb.net/blog?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))


// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")


// Routes
app.use(require('./routes/index'))
app.use(require('./routes/compose'))
app.use(require('./routes/blog'))

// Configuration du serveur ici....
app.listen(3000, () => {
  console.log(`Server started on port`)
})
