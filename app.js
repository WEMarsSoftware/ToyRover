
var data = require('./data.json');
var express = require("express");
var colors = require('colors');

// Create new express app
var app = express();
let port = 3000;


// Handle get requests
app.get("/", (req, res, next) => {
 res.json(data);
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
