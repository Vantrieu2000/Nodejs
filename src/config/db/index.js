const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/nvt_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Thành công!!!");
  } catch (error) {
    console.log("Thất bại !!!");
  }
}

module.exports = { connect };
