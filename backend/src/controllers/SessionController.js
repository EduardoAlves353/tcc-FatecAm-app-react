const User = require('../models/User');

// Index (todo), show (mostrar um), store (criar), update (modificar), destroy

module.exports = {
  async store(req, res) {
    const { 
      email,
      senha, nome, contato
     } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ 
        email,
        senha, nome, contato
       });
    }

    return res.json(user);
  },

  // async update(req, res) {
  //   const { id } = req.params;

  //   const { 
  //     email,
  //     senha, nome, contato
  //    } = req.body;

  //   let user = await User.findOne({ _id: id });

  //   if (user) {
  //     user = await User.updateOne(user, { 
  //       email,
  //       senha, nome, contato
  //      });
  //   }

  //   return res.json({
  //     modified: user ? user.nModified : null,
  //     ok: user ? user.ok : null,
  //   });
  // }
};