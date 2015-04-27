import Ember from 'ember';

export default Ember.ArrayController.extend({

  sortProperties: ['firstName'],
  sortAscending: true,

  contactList: function() {
    var list = this.get("arrangedContent"),
      search = this.get('search');

    if (!search) { return list; }

    return list.filter(function(item) {
      return (item.get('firstName').toLowerCase().indexOf(search) !== -1);
    });
  }.property("search","sortProperties", "sortAscending", "content.@each"),
  sortedOnfirstName: (function() {
    return this.get("sortProperties").get("0") === "firstName";
  }).property("sortProperties"),
  sortedOnphone: (function() {
    return this.get("sortProperties").get("0") === "phone";
  }).property("sortProperties"),
  glyphiconDirection: (function() {
    if (this.get("sortAscending")) {
      return "glyphicon-chevron-down";
    } else {
      return "glyphicon-chevron-up";
    }
  }).property("sortAscending"),
  actions: {
    deleteContact() {
      var contact = this.get('contact');

      contact.deleteRecord();
      contact.save();
    },
    sortBy: function(property) {
      if (this.get("sortProperties")[0] === property) {
        this.toggleProperty("sortAscending");
      } else {
        this.set("sortAscending", true);
        this.set("sortProperties", [property]);
      }
    },
    clearSelected: function() {
      var selected = this.filterProperty('isSelected', true);
      console.log(selected);
      selected.toArray(). // clone the array, so it is not bound while we iterate over and delete.
        invoke('destroyRecord');
      //invoke('save');
    }
  }
});
