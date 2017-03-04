/*Global values*/
var userInput = process.argv;

/*Exercise 1*/
//console.log("HELLO WORLD");

/*Exercise 2*/
//var total = 0;
//for(var i in userInput){
//	if(i>1){
//		total += Number(userInput[i]);
//	}
//}
//console.log(total);

/*Excercise 3*/
//var fileSystem = require("fs"),
//	file = fileSystem.readFileSync(userInput[2]), // 0 = node, 1 = this file, 2 = user first argument
//	numberOfJumpLines = file.toString().match(/\n/g).length;
//
//console.log(numberOfJumpLines);

/*Exercise 4*/
//var fileSystemLib = require("fs"),
//	fileBuffer = fileSystemLib.readFile(userInput[2], function(error, success){
//		var linesNumber = success.toString().match(/\n/g).length;
//		console.log(linesNumber);
//	});

/*Exercise 5*/
//var fileSystemLib = require("fs"),
// 	pathLib = require("path"),
// 	dir = userInput[2],
// 	fileTypeFilter = userInput[3];
// fileSystemLib.readdir(dir, function (error, success) {
// 	for (var i in success) {
// 		if (pathLib.extname(success[i]) == "." + fileTypeFilter) console.log(success[i]);
//
// 	}
// });

/*Exercise 6 (The instructions was so unclear madafacka!!!111)*/
//var myModule = require("./exercise6_module.js"),
//	pathLib = require("path"),
//	myModule(userInput[2], userInput[3], function(error, response){
//		if(!error){
//			for(var x in response){
//				console.log(response[x]);
//			}
//		}
//	});

/*Exercise 7*/
//var httpLib = require("http");
//httpLib.get(userInput[2], function(response){
//	response.on("data", function(response){
//		console.log(response.toString());
//	});
//});

/*Exercise 8*/
//var httpLib = require("http");
//httpLib.get(userInput[2], function(response){
//	var data = "";
//	response.on("data", function(response){
//		data += response;
//	});
//	response.on("end", function(){
//		console.log(data.length);
//		console.log(data);
//	});
//})

/*Exercise 9*/
//var httpLib = require("http"),
//	responseObj = {};
//for (var i in userInput) {
//	if (i > 1) {
//		(function (i) {
//			var tempData = "";
//			httpLib.get(userInput[i], function (response) {
//				response.on("data", function (data) {
//					tempData += data;
//				})
//				response.on("end", function () {
//					responseObj["response" + i] = tempData;
//					if (userInput.length - 2 == Object.keys(responseObj).length) {
//						for (var x = 2; x < Object.keys(responseObj).length+2; x++) {
//							console.log(responseObj["response" + x]);
//						}
//					}
//				});
//			});
//		})(i);
//	}
//}

/*Exercise 10*/
//var netLib = require("net");
//function pad(n) { return n < 10 ? '0' + n : n }
//function listener(socket){}
//var server = netLib.createServer(function(socket){
//	d = new Date();
//	s = d.getFullYear() + "-"
//		+ pad(d.getMonth() + 1) + "-"
//		+ pad(d.getDate()) + " "
//		+ pad(d.getHours()) + ":"
//		+ pad(d.getMinutes()) + "\n";
//	socket.end(s);
//});
//
//server.listen(userInput[2]);

/*Exercise 11*/
//var httpLib = require("http"),
//	fs = require("fs");
//var server = httpLib.createServer(function (req, res){
//	fs.createReadStream(userInput[3]).pipe(res);;
//});
//server.listen(userInput[2]);

/*Exercise 12*/
var httpLib = require("http"),
	mapLib = require("through2-map");

var server = httpLib.createServer(function(req, res){
})

server.listen(userInput[2]);