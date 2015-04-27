/**
 * Created by red on 24.04.2015.
 */
var data = require('../data');

module.exports = function(app) {
  app.get('/api/contacts', function(req, res) {
    res.send({
      contacts: data.contacts
    });
  });
  app.get('/api/contacts/:contactId', function(req, res) {
    res.send({
      contacts: data.contacts.filter(function (contact) { return contact.id == req.params.contactId; })
    });
  });
  app.post('/api/contacts', function(req, res) {
    console.log(req.body);
    var contact = req.body.contact;

    contact.id = data.id();

    data.contacts.push(contact);

    res.send(201, {
      contact: contact
    });
  });
  app.put('/api/contacts/:contactId', function(req, res) {

    var contactFilter = data.contacts.filter(function (contact) { return contact.id == req.params.contactId; });

    var index = data.contacts.indexOf(contactFilter[0]);

    var contact = req.body.contact;

    contact.id = Number(req.params.contactId);

    data.contacts[index] = contact;

    res.send(201, {
      contact: contact
    });
  });
  app.delete('/api/contacts/:contactId', function(req, res) {

    var contact = data.contacts.filter(function (contact) { return contact.id == req.params.contactId; });
    console.log(contact)
    var index = data.contacts.indexOf(contact[0]);
    if (index > -1) {
      data.contacts.splice(index, 1);
    }
    res.send(201, {contact:index});
  });
};
