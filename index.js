const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose');

const transactions = require('./routes/transactions.js');

const url = "mongodb+srv://SubashChandar:Geek@2125@cluster0.cldvh.mongodb.net/moneymanager?retryWrites=true&w=majority";
mongoose.connect(url,{ useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true});
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));

const app =express();

app.use(express.json());
app.use('/transactions',transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log('Server Started in port'+PORT));