import DS from 'ember-data';
import Ember from 'ember';


var attr = DS.attr,
    hasMany = DS.hasMany,
    computed=Ember.computed;

export default DS.Model.extend({
  artwork: attr('string'),
  name: attr('string'),
  artist: attr('string'),
  isExplicit: attr('boolean'),
  songs: hasMany('song'),
  // totalDuration: function(){
  //   var songs=this.get('songs');
  //   return songs.reduce(function(previousValue, element){
  //     var currentValue=element.get('duration');
  //     if (isNaN(currentValue)){
  //       return previousValue
  //     }else{
  //       return previousValue + currentValue
  //     }
  //   },0);
  //
  // }.property('songs.@each.duration'),
  songDurations: computed.mapBy('songs','duration'),

  totalDuration: computed.sum('songDurations'),
  // songCount: function(){
  //     return this.get('songs.length');
  //   }.property('songs.length')
  songCount:computed.alias('songs.length')

});
