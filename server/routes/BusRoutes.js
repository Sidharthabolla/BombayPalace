const express = require("express");
const router = express.Router();

const { GetAllBusRoutes, CreateNewBusRoute, DeleteBusRoute } = require("../controllers/BusRoutesController");

router.get("/all", GetAllBusRoutes);
router.get("/create/:id", CreateNewBusRoute);
router.get("/delete/:id", DeleteBusRoute);

module.exports = router;
