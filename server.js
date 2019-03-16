// https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli
// Get dependencies
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Initialize morgan
app.use(morgan('combined'));

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// https://github.com/angular/angular-cli/issues/8342#issuecomment-414104501
// Point static path to dist/project-name
app.use(express.static(path.join(__dirname, 'dist/fantasy-rpg-simulator')));

// Set the api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/fantasy-rpg-simulator/index.html'));
});

// Get port from environment and store in Express
const port = process.env.PORT || '4200';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`API running on localhost:${port}`));
