require("dotenv").config();
const express=require('express');
const app=express();
const userRouter =require("./api/users/user.router");
const mysql=require("mysql");

app.use(express.json());

app.use("/api/users",userRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("server on port 3000...")
});

