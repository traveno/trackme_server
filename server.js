const express = require('express');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');

var corsOptions = {
  origin: 'http://localhost:4200' // default angular port
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });


// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the trackme application API' });
});

require('./app/routes/user.routes')(app);
require('./app/routes/stat.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});