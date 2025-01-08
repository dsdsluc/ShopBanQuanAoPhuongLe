const mongoose = require('mongoose');

module.exports.connect = async ()=>{
    try {
        const mongooseUrl = process.env.MONGO_URI;
        await mongoose.connect(mongooseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 10000
          });
        console.log("Connect Success!")
    } catch (error) {
        console.log(error);
        console.log("Connect Error!")
    }
}

