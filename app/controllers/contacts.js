import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['firstName'],
  sortAscending: true,

  contactList: function() {
    var list = this.get("arrangedContent"),
      search = this.get('search');

    if (!search) { return list; }

    return list.filter(function(data) {
      return (data.get('firstName').toLowerCase().indexOf(search) !== -1);
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
  selected: Ember.computed.filterBy('contactList.[]', 'isSelected', true),
  actions: {
    deleteContact: function(object) {
      this.get('content').removeObject(object);
      object.destroyRecord();
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
    },
    addToFavSelected: function() {
      var selected = this.filterProperty('isSelected', true);
      console.log(selected);
      selected.setEach('isFavorite',true);
    }
  }
});
/*
(function() {
  var App;

  App = Ember.Application.create();

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return Ember.A([
        {
          id: 1,
          firstName: 'Bram',
          lastName: 'Moolenaar',
          knownFor: "Vim"
        }, {
          id: 2,
          firstName: 'Richard',
          lastName: 'Stallman',
          knownFor: "GNU"
        }, {
          id: 3,
          firstName: 'Dennis',
          lastName: 'Ritchie',
          knownFor: "C"
        }, {
          id: 4,
          firstName: 'Rich',
          lastName: 'Hickey',
          knownFor: "Clojure"
        }, {
          id: 5,
          firstName: 'Guido',
          lastName: 'Van Rossum',
          knownFor: "Python"
        }, {
          id: 6,
          firstName: 'Linus',
          lastName: 'Torvalds',
          knownFor: "Linux"
        }, {
          id: 7,
          firstName: 'Yehuda',
          lastName: 'Katz',
          knownFor: "Ember"
        }
      ]);
    }
  });

  App.IndexController = Ember.ArrayController.extend({
    sortProperties: ['id'],
    sortAscending: true,
    theFilter: "",
    filterPeople: (function() {
      return this.get("arrangedContent").filter((function(_this) {
        return function(theObject, index, enumerable) {
          if (_this.get("theFilter")) {
            return _this.checkFilterMatch(theObject, _this.get("theFilter"));
          } else {
            return true;
          }
        };
      })(this));
    }).property("theFilter", "sortProperties", "sortAscending", "content.@each"),
    sortedOnID: (function() {
      return this.get("sortProperties").get("0") === "id";
    }).property("sortProperties"),
    sortedOnFirstName: (function() {
      return this.get("sortProperties").get("0") === "firstName";
    }).property("sortProperties"),
    sortedOnLastName: (function() {
      return this.get("sortProperties").get("0") === "lastName";
    }).property("sortProperties"),
    sortedOnKnownFor: (function() {
      return this.get("sortProperties").get("0") === "knownFor";
    }).property("sortProperties"),
    glyphiconDirection: (function() {
      if (this.get("sortAscending")) {
        return "glyphicon-chevron-down";
      } else {
        return "glyphicon-chevron-up";
      }
    }).property("sortAscending"),
    checkFilterMatch: function(theObject, str) {
      var field, match;
      match = false;
      for (field in theObject) {
        if (theObject[field].toString().slice(0, str.length) === str) {
          match = true;
        }
      }
      return match;
    },
    clearForm: function() {
      this.set("id", "");
      this.set("lastName", "");
      this.set("firstName", "");
      return this.set("knownFor", "");
    },
    actions: {
      sortBy: function(property) {
        if (this.get("sortProperties")[0] === property) {
          this.toggleProperty("sortAscending");
        } else {
          this.set("sortAscending", true);
          this.set("sortProperties", [property]);
        }
      },
      addPerson: function() {
        var person;
        person = {
          id: this.get('id'),
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          knownFor: this.get('knownFor')
        };
        this.content.pushObject(person);
        return this.clearForm();
      }
    }
  });

}).call(this);*/
