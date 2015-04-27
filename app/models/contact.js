import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  photo: DS.attr('string'),
  dateOfBith: DS.attr('date'),
  notice: DS.attr('string'),
  isFavorite: DS.attr('boolean',{defaultValue: false}),
  isSelected: DS.attr('boolean', { defaultValue: false })
});
