import Ember from 'ember';
var computed= Ember.computed,
    inject= Ember.inject;

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings:['isCurrentSong'],
  player: inject.service(),
  song: null,
  isCurrentSong: function(){
    return this.get('song')===this.get('player.song');
  }.property('song','player.song'),

});
