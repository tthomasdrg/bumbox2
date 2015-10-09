import Ember from 'ember';
var computed= Ember.computed,
    inject= Ember.inject;

export default Ember.Component.extend({
  tagName: 'footer',
  classNames: ['now-playing'],
  classNameBindings:['isCurrentSong'],
  player: inject.service(),
  noSong: computed.empty('song'),
  song: computed.readOnly('player.song'),
  currentTime: computed.alias('player.currentTime'),
  remainingTime: computed.alias('player.remainingTime'),
  showCurrent: true,
  actions: {
    toggleShow: function(){
       this.toggleProperty('showCurrent');
    }
  }

});
