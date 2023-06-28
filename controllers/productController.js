const productModel = require("../models/productModel.js")

const getProducts = async (req,res) => {
        
     try{
            let product = await productModel.find({});
            res.status(200).json({product
            })
     }
     catch(error){
        console.log(error)
     }
} 


const createProduct = async (req,res) => {
    try{
          const{name, quantity} = req.body;

          await productModel.create({
            name,
            quantity,
          })
          res.status(201).json({
            success:true,
            message:"Task added success"
          })
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: err.message,
         })
    }
}

const productDelete = async (req,res) => {
    try{
        const task = await productModel.findOneAndRemove(req.params._id);
        // if(!task){
        //     res.status(404).json({
        //         success: false,
        //         message: err.message,
        //      })
        // }
        console.log(task)
        // await task.deleteOne();

        res.status(200).json({
            success: true,
            message: "Task deleted"
            
        })
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: err.message,
         })
    }
}
 

const updateQuantity = async (req,res) => {
    try{
        const ID = req.params.productID;
    const product = await productModel.findById(ID)
    console.log(product)
   const newQty = parseInt(product.quantity) + parseInt(req.query.number);

   const updatedProduct = await productModel.findByIdAndUpdate(ID, {quantity:newQty})
   
   console.log(updatedProduct)
   updatedProduct.quantity = newQty;
   res.send({
    product: updatedProduct,
    message: 'updated successfully',
  });
}
   catch(err){
    res.send(err);
}


}

module.exports = {getProducts , createProduct, productDelete, updateQuantity}
