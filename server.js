var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
// load math.js
//var request = require('request');
var bodyParser = require('body-parser');
var logger = require('morgan');
var async = require('async');
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.get('/ms/matrixMultiplication', function(req,res){
//
// 	var matrix2 = math.matrix([[23],[11],[20]]);
// 	var matrix3 = math.matrix([[-15,15,18,12,-1]]);
// 	var matrix1 = math.matrix([[6,-2,18],[3,1,-11],[-8,3,-24],[9,-9,18]]);
// 	var matrixResult = 	math.multiply(
// 												math.multiply(matrix1, matrix2),matrix3);
//
// 	console.log('|'+matrixResult+' |');
//
// 	})

function getNextNum(inputStringArray){
	var nextNum = 0;
		for(i=0; i<inputStringArray.length;i++){
				nextNum = nextNum + (parseInt(inputStringArray[i])*parseInt(inputStringArray[i]));

			}
		return nextNum;
	}
app.get('/ms/happynumber', function(req,res){

	var inputArray = [4489,5,1,200,47901,73,227661,347,6536,83];

//	for(i = 0; i < inputArray.length; i++){
//		var digital = inputArray[i].toString().split('');
//		console.log(getNextNum(digital));

		var tempArray = new Array();
		tempArray.push(200);
		while(tempArray.length>=1){
			var digital = tempArray[tempArray.length-1].toString().split('');
			console.log(digital);
			var nextNum = getNextNum(digital);
			console.log(nextNum);
			tempArray.push(nextNum);
			if(nextNum==1){
				console.log('happy '+(tempArray.indexOf(1)));
				break;
			}
			else if(nextNum == 200){
				console.log('unhappy '+(tempArray.indexOf(nextNum)));
				break;
			}
		  else
		  	console.log(tempArray);
		}
//		console.log(digital);
		//separate to digital

//	}

	})


app.listen(app.get('port'), function() {
//	if(err) throw err;
  console.log('Node app is running on port', app.get('port'));
});
