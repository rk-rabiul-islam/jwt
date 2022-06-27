const mongoose = require('mongoose');


const connetMongoDB = async () => {

    try{
        let connect = await mongoose.connect(process.env.MONGOODB_CONNET);
        console.log(`MongoDB Connection Successfull Host BY : ${ connect.connection.host }`.bgCyan.black);
    }catch(error){
        console.log(`${error}`.bgRed);
    }

}

// All Exports here
module.exports = connetMongoDB;