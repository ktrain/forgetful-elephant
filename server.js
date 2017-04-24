'use strict';

const express = require('express');

const app = express();
const router = require('./router.js');

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin',   '*');
	res.header('Access-Control-Allow-Headers',  'Cache-Control, Pragma, Origin, Content-Type');
	res.header('Access-Control-Allow-Methods',  'POST, GET, PUT, DELETE, OPTIONS');
	res.header('Access-Control-Expose-Headers', 'Content-Type');

	if (req.type === 'OPTIONS') {
		return res.status(200).send({});
	}

	next();
});

app.use(router);

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.info(`Listening on port ${port}`);
});
