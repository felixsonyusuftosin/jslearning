const { config } = require('./db.config')

const { nano } = config

const createDb = async function () {
  console.log(' creating user profiles database entry')
  try {
    const created = await nano.db.create('userprofiles')
    if (created) {
      console.log('created user db successfully')
    }
    const availableDatabases = await nano.db.list()
    availableDatabases.map(db => {
      console.log(`This db :${db} is available`)
    })

  } catch (err) {
    console.log(err)
    console.error('could not create user profile db')
  }
}


createDb()

// alice.insert({ happy: true }, 'rabbit').then((body) => {
//   console.log(body);
// });