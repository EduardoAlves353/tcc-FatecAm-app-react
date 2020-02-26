const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  nome: String,
  raca: String,
  porte: String,
  filhote: String,
  idade: String,
  castrado: String,
  sexo: String,
  contato: String,
  endereco: String,
  outros: String,
  descricao: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Spot', SpotSchema);