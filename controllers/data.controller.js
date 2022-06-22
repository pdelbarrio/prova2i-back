const Data = require("../models/data.model");
const { setError } = require("../helpers/utils");

const getData = async (req, res, next) => {
  try {
    // console.log(req, res);
    const allData = await Data.find({});

    return res.status(200).json({
      message: "Recovered all data",
      data: { data: allData },
    });
  } catch (error) {
    return next(setError(500, "Failed to retrieve data"));
  }
};

module.exports = { getData };
