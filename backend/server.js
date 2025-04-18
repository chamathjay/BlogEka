import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const server = express();
let PORT = 3000;

const uri = process.env.DB_LOCATION;

mongoose.connect(uri, {
    autoIndex: true,
});

server.listen(PORT, () => {
    console.log(`Server is listening on port -> ${PORT}`);
});