// const express = require('express')
import express from 'express'

const router = express.Router();

const jokes = [{id:1, joke:"Joke1"}, {id:2, joke:"Joke2"}, {id:3, joke:"Joke3"}, {id:4, joke:"Joke4"}, {id:5, joke:"Joke5"}]

router.get('/', (req, res) => {
    res.send("<h1>Hello itsss user Get method calling</h1>");
});

// app.get('/api/jokes', (req, res) => {
//     res.send(jokes);
// })

router.get('/about', (req, res) => {
    res.send("<h1> user About Page </h1>")
})

// module.exports = router;
export default router