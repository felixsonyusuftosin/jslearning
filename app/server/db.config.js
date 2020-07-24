module.exports.config = {
  dbhost: 'localhost',
  dbport: '5984',
  nano: require('nano')('http://admin:password@localhost:5984')
}