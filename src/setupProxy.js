const proxy = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		proxy(
			'/api',
			{
				target:'http://10.1.1.88:8000',
				changeOrigin: true
			}
		),
		proxy(
			'/person',
			{
				target: 'http://10.1.1.88:8088',
				changeOrigin: true
			}
		)
	)
};
