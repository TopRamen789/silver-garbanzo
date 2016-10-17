'use strict';

var fs = require('fs');

function SetupRoutes(app) {
	return new Promise((resolve, reject) => {
		fs.readdir('./routes', function(err, files) {
			if(err)
				return reject(err);

			var index = files.indexOf('routeconfig.js');
			files.splice(index,1);

			try {
				files.forEach(f => {
					let fileName = f.substr(0, f.length - 3);
					let controller = require(`./${filename}`);
					app.use(`/${fileName}`, controlle);
				});
				app.use('/', require('.'));
			}
			catch(err) {
				reject(err);
			}

			resolve(app);
		});
	});
}

module.exports = SetupRoutes;