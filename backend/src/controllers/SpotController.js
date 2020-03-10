const User = require('../models/User');
const Spot = require('../models/Spot');

// Index (todo), show (mostrar um), store (criar), update (modificar), destroy

module.exports = {
  async index(req, res) {
    const adotado = 'false';

    const spots = await Spot.find({ adotado });

    return res.json(spots);
  },

  async show(req, res) {
    const { raca } = req.query;

    const spots = await Spot.find({ raca });

    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { 
      company, nome, raca, porte, filhote,
      idade, castrado, sexo, contato, endereco, outros,
      descricao, adotado
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
      descricao,
      adotado: false
    });
    console.log(req.body);
    console.log(req.file);
    return res.json(spot);
  },

  async update(req, res) {
      const { id } = req.params;
      const { filename } = req.file;
      const { 
        company, nome, raca, porte, filhote,
        idade, castrado, sexo, contato, endereco, outros,
        descricao,
       } = req.body;
  
      const spot = await Spot.findOne({ _id: id });

      if (!spot) {
        return res.status(400).json({ error: 'Spot does not exists' });
      }

      let updateSpot;

      updateSpot = await Spot.updateOne(spot, { 
        thumbnail: filename,
        company, nome, raca, porte, filhote,
        idade, castrado, sexo, contato, endereco, outros,
        descricao
       });
  
      return res.json({
        modified: updateSpot ? updateSpot.nModified : null,
        ok: updateSpot ? updateSpot.ok : null,
      });
    }
};