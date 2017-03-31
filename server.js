'use strict';

const express = require('express');

const app = express();
const router = require('./router.js');

app.use(router);

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.info(`Listening on port ${port}`);
});
