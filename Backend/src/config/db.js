const mongoose = require('mongoose');
const env = require('dotenv').config();


async function connect(){
    try{
        await mongoose.connect(
          "mongodb://localhost:27017/" + process.env.DataName,
        //   {
        //     useNewUrlParser: true,
        //     useCreateIndex: true,
        //     useUnifiedTopology: true,
        //   }
        );
        console.log("Kết nối data thành công!");
        
    }
    catch{
        console.log('Kết nối data thất bại!');
    }
}
module.exports = { connect } 