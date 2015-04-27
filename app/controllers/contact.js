import Ember from 'ember';

export default Ember.Controller.extend({
  isEdit: false,

  actions: {
    edit: function () {
      this.set('isEdit', true);
    },
    addToFavorites: function () {
      var model = this.get('model');
      model.set('isFavorite', true);
      model.save();
    },
    removeFromFavorites: function () {
      this.set('isFavorite', false);
      this.get('model').save();
    },
    doneEditing: function () {
      this.set('isEdit', false);
      var model = this.get('model');
      if (model.get('firstName')) {
        model.save();
      }
    },
    deleteContact: function(){
      var controller = this;
      this.get('model').destroyRecord().then(function() {
        controller.transitionToRoute('contacts');
      });
    }
  }
});
