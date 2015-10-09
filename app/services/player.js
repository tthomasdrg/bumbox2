/* globals Math */
import Ember from 'ember';
var run=Ember.run;

export default Ember.Service.extend({
  isPlaying: false,
  audioElement: null,
  song: null,
  duration: 0,
  currentTime: 0,
  remainingTime: function(){

    console.log('remainingTime',this.get('song.duration') ,this.get('currentTime'));
    return this.get('song.duration') - this.get('currentTime');
  }.property('currentTime','song.duration'),

  setupAudioElement: function(){
    var el=document.createElement('audio');
    el.addEventListener('play', run.bind(this, 'didStartPlaying'));
    el.addEventListener('pause', run.bind(this, 'didPausePlaying'));
    el.addEventListener('timeupdate', run.bind(this, 'timeUpdate'));
    el.addEventListener('durationchange', run.bind(this, 'durationUpdate'));
    this.set('audioElement',el);

  }.on('init'),

  play: function(song){
    if(this.get('song') !==song){
      this.set('audioElement.src',song.get('url'));

      this.set('song',song);
    }
    // console.log('play call',song);
    // console.log('song url',song.get('url'));

    this.get('audioElement').play();


  },
  pause: function(){
    this.get('audioElement').pause();
  },
  resume: function(){
    this.get('audioElement').play();
  },

  didStartPlaying: function(){
    console.log('didStartPlaying',this.get('audioElement.duration'));
    this.set('isPlaying',true);

  },
  didPausePlaying: function(){
    console.log('didPausePlaying');
    this.set('isPlaying',false);
  },
  timeUpdate: function(){

    this.set('currentTime',Math.floor(this.get('audioElement.currentTime')));
    // this.set('remainingTime',Math.floor(this.get('duration'))-Math.floor(this.get('audioElement.currentTime')));
    console.log('timeUpdate',this.get('audioElement.currentTime'),this.get('duration'),Math.floor(this.get('duration'))-Math.floor(this.get('audioElement.currentTime')));
  },
  durationUpdate: function(){
    this.set('duration',this.get('audioElement.duration'));
    console.log('durationUpdate',this.get('duration'),Math.floor(this.get('audioElement.duration')));
  },

  willDestroy: function(){
    this.get('audioElement').pause();
    this.set('audioElement.src','');
  }

});
