const mongoose = require('mongoose');

const UserScrema = new mongoose.Schema({
  email: String,
  senha: String,
  nome: String,
  contato: String,
});

module.exports = mongoose.model('User', UserScrema);