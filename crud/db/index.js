const mongoose  = require('mongoose')
// const DB_URL = process.env.DB_URL
const connectTodb = async()=>{
  try {
     const DBdata = await mongoose.connect(process.env.DB_URL)
     console.log(`Database connected ${DBdata.connection.host}`);
  } catch (error) {
    console.log("Database Connection FAILED.....", error);
    process.exit(1);
  }
}

 module.exports = connectTodb