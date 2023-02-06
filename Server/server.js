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

    const consumablesDataCollection = db.collection('consumables_data');
    const consumablesDataRouter = createRouter(consumablesDataCollection);
    app.use('/api/consumables_data', consumablesDataRouter);
  
  })
  .catch(console.err);



app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});