require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

const notes = [
  {
    content: "HTML is easy",
    important: true
  },
  {
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

Note.insertMany(notes).then(result => {
  console.log(`${result.length} notas salvas!`)
  mongoose.connection.close()
}).catch(err => {
  console.error('Erro:', err)
  mongoose.connection.close()
})