/**
 * Created by red on 24.04.2015.
 */
var contacts = [
  { id: 1, firstName: 'Igor', lastName: 'Redka', phone: '+380953570183', email: 'igor4ina@gmail.com',photo: 'https://pbs.twimg.com/profile_images/1241448061/science_169_2.jpg',dateOfBith: new Date('02-13-1990'),notice: 'write this app',isFavorite: true},
  { id: 12, firstName: 'TestFirstName', lastName: 'TestLastName', phone: '+380991111111', email: 'test@gmail.com',photo: 'https://pbs.twimg.com/profile_images/1241448061/science_169_2.jpg',dateOfBith: new Date('02-02-1995'),notice: 'good test user',isFavorite: false }
];

var next = 100;

function id () {
  return next++;
}

module.exports = {
  id: id,
  contacts: contacts
};
