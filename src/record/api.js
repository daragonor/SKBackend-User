
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const model = require('./model-datastore');

const router = express.Router();

// Automatically parse request body as JSON
router.use(bodyParser.json());

router.get('/', (req, res, next) => {
    model.list(10, req.query.pageToken, (err, entities, cursor) => {
        if (err) {
            next(err);
            return;
        }
        res.json({
            items: entities,
        });
    });
});

module.exports = router;
