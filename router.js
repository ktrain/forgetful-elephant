'use strict';

const _          = require('lodash');
const express    = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json({
	strict: false,
}));

let database = [];

router.all('/', (req, res) => {
	res.status(200).send({
		resources: {
			Events: {
				collection: {
					url: `http://${req.headers.host}/events`,
					methods: ['GET', 'POST'],
				},
				singular: {
					url: `http://${req.headers.host}/events/:id`,
					methods: ['GET', 'DELETE'],
				},
			},
		},
	});
});

router.all('/events*', (req, res, next) => {
	console.log('\n----------');
	console.log(`${req.method} ${req.path}`);
	next();
});

router.post('/events', (req, res) => {
	let count = database.push(req.body);
	req.body.id = count;
	res.status(200).send(req.body);
	console.log(database);
});

router.get('/events', (req, res) => {
	var collection = _.filter(database);
	res.status(200).send(collection);
	console.log(database);
});

router.get('/events/:id', (req, res) => {
	let record = database[req.params.id - 1];
	res.status(200).send(record);
	console.log(database);
});

router.delete('/events/:id', (req, res) => {
	let record = database[req.params.id - 1];
	delete database[req.params.id - 1];
	res.status(200).send(record);
	console.log(database);
});

module.exports = router;
