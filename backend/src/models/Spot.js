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
}, {
  toJSON: {
    virtuals: true,
  }
});

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);