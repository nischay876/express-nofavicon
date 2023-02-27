const log = new (require('@tycrek/log'))().enable.express();
const nofavicon = require('./nofavicon');
const fetch = require('node-fetch');
const express = require('express');

const TEST_PATH = 'http://localhost:12345/favicon.ico';

const app = express();
app.use(log.express(true));
app.use(nofavicon);
app.all('*', (_req, res) => res.send('Hello World!'));
log.express().Host(app, 12345, '0.0.0.0', () => {
	log.info('Opening path', TEST_PATH);

	setTimeout(() =>
		fetch(TEST_PATH)
			.then(({ status }) => {
				if (status !== 204) throw new Error(`Expected status 204, got ${status}`);
				else log.info('Favicon response', status).callback(process.exit, 0);
			})
			.catch((err) => log.error('Test failed').err(err).callback(process.exit, 1)),
		1000);
});
