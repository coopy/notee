var View = require('./note-view');
var Model = require('./note-model');


$(function () {
  var model = new Model({ body: "This is the note's body!" });
  var view = new View({ model: model });
  $('body').append(view.$el);
});