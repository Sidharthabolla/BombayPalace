const BusRoute = require('../models/BusRoute.js')

  const GetAllBusRoutes = (req, res) => {
    BusRoute.find()
      .then((result) => {
        return res.json(result);
      })
      .catch((err) => {
        console.log(err)
      })
  };
  
  const CreateNewBusRoute = (req, res) => {
    const newBusRouteNumer = req.params.id
    const busRoute = BusRoute({
      routeNumber : newBusRouteNumer
    })
    busRoute.save()
      .then((result) => {
        BusRoute.find()
        .then((result) => {
          return res.json(result);
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  };
  
  const DeleteBusRoute = (req, res) => {
    const newBusRouteNumer = req.params.id
      BusRoute.deleteMany({routeNumber : newBusRouteNumer})
        .then((result) => {
          return res.json(result);
        })
        .catch((err) => {
          console.log(err)
        })
  };
  
  module.exports = {
    GetAllBusRoutes,
    CreateNewBusRoute,
    DeleteBusRoute
  };
  