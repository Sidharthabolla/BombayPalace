const User = require('../models/user.js')

const GetAllUsers = (req, res) => {
  User.find()
    .then((result) => {
      return res.json(result);
    }).catch((err) => {
      console.log(err)
    })
};

const GetUserByBusRouteId = (req, res) => {
  const busRoute = req.params.id;
  User.find({busRoute: busRoute})
    .then((result) => {
      return res.json(result);
    }).catch((err) => {
      console.log(err)
    })
};

const CreateNewUser = (req, res) => {
  const user = User(
    req.body
  )
  // const userInfo = req.params.user
  // const user = User(userInfo)
  user.save()
    .then((result) => {
      return res.json(result);
    })
    .catch((err) => {
      console.log(err)
    })
};

const DeleteUser = (req, res) => {
  const userId = req.params.id;
  User.deleteOne({role: userId})
    .then((result) => {
      return res.json(result);
    }).catch((err) => {
      console.log(err)
    })
};

module.exports = {
  GetAllUsers,
  GetUserByBusRouteId,
  CreateNewUser,
  DeleteUser
};
