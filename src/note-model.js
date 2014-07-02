var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  defaults: {
    name: 'New Note',
    body: '',
    created: new Date()
  }
});
