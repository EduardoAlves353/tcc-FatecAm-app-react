const User = require('../models/User');
const Spot = require('../models/Spot');

// Index (todo), show (mostrar um), store (criar), update (modificar), destroy

module.exports = {
  async index(req, res) {
    const { raca } = req.query;

    const spots = await Spot.find({ raca });

    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { 
      company, nome, raca, porte, filhote,
      idade, castrado, sexo, contato, endereco, outros,
      descricao,
     } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }
    
    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company, nome, raca, porte, filhote,
      idade, castrado, sexo, contato, endereco, outros,
      descricao
    });
    console.log(req.body);
    console.log(req.file);
    return res.json(spot);
  }
};