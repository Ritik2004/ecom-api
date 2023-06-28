const mongoose = require("mongoose")

const db = () => {mongoose.connect("mongodb://localhost:27017", {
    dbName:"ecom_api"
})
.then(()=>console.log('Database connected '))
.catch(()=>console.log('Error in connecting database'))

}

module.exports = db