//require("dotenv").config()
const express = require("express");
const app = express();
//const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;
const products_route = require('./routes/products');

app.get('/', (req,res)=>{
    res.send("Hi, i am live");
}) 
//middleware or to set router//
//app.use('/api/products', products_route);
//app.use('/api/products/testings', products_route);
//app.use('/api/products/data', products_route);
app.use("/api/products", products_route)
app.use("/api/products",products_route)
app.use("/api/products", products_route)

const start = async() => {
    try{
       //await connectDB();
       // await  connectDB(process.env.MONGODB_URL)
        app.listen(PORT, () =>{
       console.log(`${PORT} Yes I am Connected`);
        })
    }catch(error){
        console.log(error)
        
    }
} 
start();
