const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busRouteSchema = new Schema({
  routeNumber: {
    type: Number,
    required: true
  }
}, { timestamps: true})

const BusRoute = mongoose.model('BusRoute', busRouteSchema);
module.exports = BusRoute;
