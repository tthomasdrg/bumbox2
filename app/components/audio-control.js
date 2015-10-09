import Ember from 'ember';
var computed= Ember.computed,
    inject= Ember.inject;


export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['play'],
  isCurrentSong: function(){
    return (this.get('song')===this.get('player.song')?true:false);
  }.property('song','player.song'),

  isPlaying: computed.and('isCurrentSong','player.isPlaying' ),
  buttonIcon: computed('isPlaying', function(){
    console.log('buttonIcon upd', this.get('isPlaying'));
    return this.get('isPlaying')?'❙❙':'▶';
  }),

  player: inject.service(),

  actions: {
    playToggle: function(){
      // this.toggleProperty('isPlaying');
      console.log(this.get('song'));
      if(this.get('isPlaying')){
        this.get('player').pause();
      } else{

        this.get('player').play(this.get('song'));
      }
    }
  }
});
