import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var store = this.store;
    
    return store.filter('contact', { isFavorite: true }, function(contact) {
      return contact.get('isFavorite');
    });
  }
});
