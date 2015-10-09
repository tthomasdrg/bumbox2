import DS from 'ember-data';
var attr = DS.attr,
  computed= Ember.computed,
    belongsTo = DS.belongsTo;

// {"id":"44","track":4,"name":"It Gets Better","duration":476,"url":"audio/Southern_Nights_-_09_-_Grass_or_Gasoline.mp3","album":"4"}]
export default DS.Model.extend({
  track: attr('number'),
  name: attr('string'),
  duration: attr('number'),
  url: attr('string'),
  album:  belongsTo('album'),
  artwork: computed.alias('album.artwork'),
  artist: computed.alias('album.artist'),

})
