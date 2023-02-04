const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

    const router = express.Router();

    router.get('/', (req, res) => {
    collection
        .find()
        .toArray()
        .then((data) => res.json(data))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    return router;
}

module.exports = createRouter;