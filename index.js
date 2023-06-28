const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const PORT = 4000
const product = require('./routes/productRoute.js')
const connectDb = require('./config/database.js')

connectDb()
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use('/api', product)

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})