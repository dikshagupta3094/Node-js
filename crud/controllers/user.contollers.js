const User = require("../model/user.model.js");

exports.home = (req, res) => {
  res.send("Home page");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(200).json({
      success: true,
      msg: "Succesfull entry",
      user,
    });
  } 
  catch (error) {
    res.status(400).json({
      success: false,
      msg: "Error ocuured",
    });
    console.log(`Error ${error}`);
  }
};
