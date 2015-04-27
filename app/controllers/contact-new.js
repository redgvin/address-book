import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: null,
  lastName: null,
  phone: null,
  email: null,
  photo: null,
  dateOfBith: null,
  notice: null,

  actions: {
    addContact: function () {
      if (this.get('firstName')) {
        this.store.createRecord('contact', {
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          phone: this.get('phone'),
          email: this.get('email'),
          photo: this.get('photo'),
          dateOfBith: this.get('dateOfBith'),
          notice: this.get('notice')
        }).save();
        this.transitionToRoute('contacts');
      }
    }
  }
});

