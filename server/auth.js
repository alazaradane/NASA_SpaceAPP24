const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.mongo_uri || 'mongodb+srv://fetihgirma1:a%26P%402ssf34@exoplanet101.ou3pz.mongodb.net/exoplanet101?retryWrites=true&w=majority&appName=exoplanet101'
const ConnectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB cluster');
    } catch (error) {
        console.error('Error connecting to MongoDB cluster:', error);
    }
};
module.exports = ConnectDB;