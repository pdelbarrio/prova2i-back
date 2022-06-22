const Data = require("../models/data.model");
const { setError } = require("../helpers/utils");

const getData = async (req, res, next) => {
  try {
    console.log(req.query.clientCode);
    console.log(req.query.stationCode);

    const clientCode = req.query.clientCode;
    const stationCode = req.query.stationCode;

    // const allData = await Data.find({});
    const infoFromDB = await Data.find(
      { $and: [{ clientCode: clientCode }, { stationCode: stationCode }] },
      { _id: 0, __v: 0 }
    );

    console.log(infoFromDB);

    return res.status(200).json({
      message: "Recovered all data",
      data: { data: infoFromDB },
    });
  } catch (error) {
    return next(setError(500, "Failed to retrieve data"));
  }
};

module.exports = { getData };
