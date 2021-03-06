/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
// Insert seed models below
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

// Insert seed tabs below
var thingSeed = require('../api/thing/thing.seed.json');
var userSeed = require('../api/user/user.seed.json');

// Insert seed inserts below
Thing.find({}).remove(function() {
  Thing.create(thingSeed);
});

User.find({}).remove(function() {
  User.create(userSeed);
});