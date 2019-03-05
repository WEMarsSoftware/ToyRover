
var data1 = require('./data1.json');
var data2 = require('./data2.json');
var express = require("express");
var colors = require('colors');

// ADD IN node-json-db
// https://www.npmjs.com/package/node-json-db

// Create new express app
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

let toggler = 0;
// Handle get requests
app.get("/", (req, res, next) => {
 if(toggler == 0){
 	res.json(data1);
 	toggler=1;
 } else {
 	res.json(data2);
 	toggler=0;
 }
});

app.listen(port, () => {
	console.log("                .                                            .      ");
	console.log("   .   .                  .              .        .        *     .  ");
	console.log("  *         .                     .       .           .      .      ");
	console.log("                .                                            	.    ");
	console.log("           "+ colors.blue.bold(" _ __ _____   _____ _ __") +" 		                  .      ");	
	console.log("     .   . "+ colors.blue.bold("| '__/ _ \\ \\ / / _ \\ '__|")+"	.        .   .        ");
	console.log("  .        "+ colors.blue.bold("| | | (_) \\ V /  __/ |") +"   		           .     	 ");
	console.log("           "+colors.blue.bold("|_|  \\___/ \\_/ \\___|_|") + "  		                  .      ")
	console.log("     .   .                  .              *        .   .           ");
	console.log("  .         .                     .       .           .     		 ");
	console.log("                .                                            .      ");
	console.log("     .   *                  .              .        .   *          .");
	console.log("  .         .                     .       .           .      .      ");
	console.log('____^/\\___^--____/\\____O______________/\\/\\---/\\___________---__'.red);
	console.log("   /\\^   ^  ^    ^                  ^^ ^  '\\ ^          ^       - ".red);
	console.log("         --           -            --  -      -         ---  __     ".red);
	
	console.log("\n");
	console.log("Rover running on:");
	console.log("http://localhost:" + port);
});

