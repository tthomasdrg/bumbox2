import Ember from 'ember';

export function formatDuration(value){
  if (!value || value==0){return '0:00'; };
  var sec=value%60;
  return ''+ Math.floor(value/60)+ ':'+((sec<10)?'0'+sec:sec);
}
export default Ember.Handlebars.makeBoundHelper(formatDuration);
