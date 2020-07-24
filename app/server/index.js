const app = require('express')()
const cors = require('cors')
const nano = require('./db.config')

app.use(cors())


app.post('/user', (req, res) => {
  const body = req.body
  const userdb = nano.use('userprofiles')
  try {
    const inserted = await userdb.insert(body)
    res.send(inserted)
  } catch (err) {
    res.status(500).send(err)
  }

})

app.get('/', (req, res) => {
  res.send(' Some random text that i just thought of in fact <h1> Some random</h1>')
})

app.get('/user', (req, res) => {
  res.send(' Hey welcome here')
})

app.listen(9898, 'localhost', () => {
  console.log('app is listening on port 9898 ... ')

})