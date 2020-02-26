const mongoose = require('mongoose');
// tenho que ver quando vou usar esse booking (reserva | possivel favorito)
const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }
});

module.exports = mongoose.model('Booking', BookingSchema);