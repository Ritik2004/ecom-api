const mongoose = require("mongoose")

const schema = mongoose.Schema({
    // _id: mongoose.ObjectId,
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        
    },
       },
    {
        timestamps:true
    }
)
    const productModel = mongoose.model('products', schema);

    module.exports = productModel
