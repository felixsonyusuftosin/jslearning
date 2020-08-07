const app = require('express')()
const cors = require('cors')
const { nano } = require('./db.config').config
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post('/user', async (req, res) => {
  const body = req.body
  const userdb = nano.use('userprofiles')
  try {
    const inserted = await userdb.insert(body)
    res.send(inserted)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

app.patch('/user', async (req, res) => { 
  const body = req.body
  const { _id } = body
  const userdb = nano.use('userprofile')
  try{ 
    const user = await userdb.get(_id)
    if(!user) {
      res.status(404).send('No user found with this id')
      return
    }
   res.send(user)
  }catch (err) {
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