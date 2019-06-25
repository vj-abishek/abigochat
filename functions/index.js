const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')

const app = express();
app.get('/users', (req, res) => {
    res.send('From abigoChats...')
})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest(app);