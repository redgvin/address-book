import Ember from 'ember';

var formatDate = Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).format("MMMM Do YYYY"); // "Sunday, February 14th 2010, 3:25:50 pm"
});

export default formatDate;
