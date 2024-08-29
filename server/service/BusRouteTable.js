const { BUS_ROUTES_FAKE_DATA } = require("../models/BusRoutesFakeData");

// Returns User With Id
const QueryBusRouteById = (id) => {
  let busRoutes;
  BUS_ROUTES_FAKE_DATA.forEach((busRoutesData) => {
    if (busRoutesData.id === Number(id)) {
      busRoutes = busRoutesData;
    }
  });
  return busRoutes;
};

// Returns List of busRoutess
const QueryListOfBusRoutes = () => {
  return BUS_ROUTES_FAKE_DATA;
};

const DeleteBusRouteById = (id) => {
  BUS_ROUTES_FAKE_DATA.filter((busRoutes) => {
    return busRoutes.id !== Number(id);
  });
};

module.exports = {
  QueryBusRouteById,
  QueryListOfBusRoutes,
  DeleteBusRouteById,
};