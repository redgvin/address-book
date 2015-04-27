/**
 * Created by red on 24.04.2015.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('contact', params.contact_id);
  }
});
