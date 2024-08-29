const express = require("express");
const router = express.Router();

const { GetAllUsers, GetUserByBusRouteId, CreateNewUser, DeleteUser } = require("../controllers/UsersController");

router.get("/all", GetAllUsers);
router.get("/bus-route/:id", GetUserByBusRouteId);
router.get("/delete/:id", DeleteUser);
router.post("/create-new-user", CreateNewUser);

module.exports = router;
