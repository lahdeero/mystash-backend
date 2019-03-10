const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	const production = (global.NODE_ENV === 'production')
	if (production) {
		app.use(proxy('/', { target: 'http://localhost:3001/' }));
	} else {
  	app.use(proxy('/', { target: 'http://192.168.10.56:3001/' }));
	}
};