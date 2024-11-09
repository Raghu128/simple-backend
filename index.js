// const express = require('express')
// const userRouter = require('./controllers/user');
// const adminRouter = require('./controllers/admin');

import express from 'express';
// import userRouter from './routes/user.js';
// import adminRouter from './routes/admin.js';
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3000;  

const jokes = [{id:1, joke:"Joke1"}, {id:2, joke:"Joke2"}, {id:3, joke:"Joke3"}, {id:4, joke:"Joke4"}, {id:5, joke:"Joke5"}]

// app.use(express.urlencoded({extended:false}));
app.use(
    cors({
      origin: ["https://deploy-mern-lwhq.vercel.app"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

// app.use((req, res, next) => {
    
//     req.username = "RaghuKumar"
//     next()
// })

// app.use((req, res, next) => {
    
//     console.log(req.username);
//     next()
// })

// app.use("/user", userRouter);
// app.use('/admin', adminRouter);
app.get("/", (req, res) => {
    res.json(jokes);
})


app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})