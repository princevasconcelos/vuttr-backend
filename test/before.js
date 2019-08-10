const app = require('../src/server');

global.request = require('supertest')(app);
global.assert = require('assert');
