const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const db = require('../database/database.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/applications', (req, res) => {
  db.getAllJobs((err, data) => {
    res.send(data);
  })
});

app.post('/applications', (req, res) => {
  db.postNewJob(req.body, (err, suc) => {
    if (err) {console.log(err)};
  })
  res.send('Unable to post');
});

app.delete('/applications/:id', (req, res) => {
  db.deleteJob(req.params.id, (err, suc) => {
    if (err) {console.log(err)}
    else {res.send('success')}
  })
})

app.listen(port, () => console.log(`Listening on ${port} brother`));