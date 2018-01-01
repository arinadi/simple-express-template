const functions = require('firebase-functions');
const express = require('express');
const request = require('request');

const app = express();
//const $request = request();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



app.get('/', (req, res) => {
	res.send('Time:' + Date.now());
//	var url = "https://jsonplaceholder.typicode.com/posts/1"
//
//	$request({
//		url: url,
//		json: true
//	}, function (error, response, body) {
//
//		if (!error && response.statusCode === 200) {
//			console.log(body) // Print the json response
//		}
//	})
});

exports.app = functions.https.onRequest(app);
