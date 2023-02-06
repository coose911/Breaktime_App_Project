const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('BreakTime');

    
    const diaryEntriesCollection = db.collection('diary_entries');
    const diaryEntriesRouter = createRouter(diaryEntriesCollection);
    app.use('/api/diary_entries', diaryEntriesRouter);

    const coffeesDataCollection = db.collection('coffees');
    const coffeesDataRouter = createRouter(coffeesDataCollection);
    app.use('/api/coffees', coffeesDataRouter);
    
    const watersDataCollection = db.collection('waters');
    const watersDataRouter = createRouter(watersDataCollection);
    app.use('/api/waters', watersDataRouter);

    const breaksDataCollection = db.collection('breaks');
    const breaksDataRouter = createRouter(breaksDataCollection);
    app.use('/api/breaks', breaksDataRouter);
  })
  .catch(console.err);



app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});