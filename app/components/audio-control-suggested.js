import Ember from 'ember';

export default Ember.Componenet.extend({
  tagName: 'span',
  ClassNames: ['play'],

  actions: {
    pause: function(){
      this.sendAction('pause');
    },
    play: function(){
      this.sendAction('play');
    },
  }
})
