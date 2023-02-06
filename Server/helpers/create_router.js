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

    router.get('/:id', (req, res) =>{
        const id = req.params.id
        collection
        .find({_id: ObjectID(id)})
        .toArray()
        .then(results => res.json(results))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        })
    })

    router.post('/', (req, res) =>{
        const newData = req.body
        collection
        .insertOne(newData)
        .then((results) =>{
            res.json(results.ops[0])
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        })
    })

    // To update number of breaks
    router.put('/', (req, res) => {
        const updatedBreaks = req.body
        collection
        .updateOne(breaks, updatedBreaks)
        res.json(collection);
    });

    return router;
}

module.exports = createRouter;