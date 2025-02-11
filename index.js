//import express from 'express';
const express = require("express");
// import { get } from 'axios';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    console.log(req.query.category,req.query.page);
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${req.query.category}&apiKey=eea24ea0ba7f40b0a1f9589151398db9&page=${req.query.page}&pagesize=9`);
        const data = await response.json(); 
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data from API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
