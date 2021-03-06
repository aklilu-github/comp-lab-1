/**
 * Main application file
 */

import express from 'express';
import config from './config/environment';
import http from 'http';

import expressConfig from './config/express';
import registerRoutes from './routes';

// Setup server
var app = express();
var server = http.createServer(app);

var events = require('events');
events.defaultMaxListeners = 1000;

expressConfig(app);
registerRoutes(app);

// Start server
function startServer() {
    app.web2 = server.listen(config.port, config.ip, function() {
        console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
