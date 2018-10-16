const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/applications', (req, res) => {
  console.log('Getting all your applications, brother');
  res.send('suck u');
});

app.post('/applications', (req, res) => {
  console.log('Posting a new application, brother');
  res.send('u suck');
});

app.delete('/applications/:app', (req, res) => {
  console.log('Deleting this application, brother');
  res.send('I suck');
})

app.listen(port, () => console.log(`Listening on ${port} brother`));