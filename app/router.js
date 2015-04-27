import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('contacts');
  this.resource('contact', { path: 'contacts/:contact_id' });
  this.route('contactNew', { path: 'contacts/new' });
  this.route('favorites');
});
