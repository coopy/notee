var $ = require('jquery')(window);
var Backbone = require('backbone');
Backbone.$ = $;

var template = require('./note.hbs');

module.exports = Backbone.View.extend({
  template: template,
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(template(this.model.toJSON));
    return this;
  }
});