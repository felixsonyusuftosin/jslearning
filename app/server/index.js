const app = require('express')()
const cors = require('cors')

app.use(cors())

app.post('/user', (req, res) => {
  const body = req.body
  res.send(body)
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