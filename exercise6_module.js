function myModule(directory, extension, callback) {
	var fileSystemLib = require("fs"),
		pathLib = require("path"),
		filtered = [];
	if(extension[0]!=".") extension = "."+extension;
	fileSystemLib.readdir(directory, function (error, success) {
		if (!error) {
			for (var i in success) {
				if (pathLib.extname(success[i]) == extension) {
					filtered.push(success[i]);
				}
			}
			callback(null, filtered);
		}else if(error){
			return callback(error, null);
		}
		
	});
};
module.exports = myModule;