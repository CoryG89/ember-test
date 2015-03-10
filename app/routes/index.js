import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    console.log("index route executed");
    this.transitionTo('posts');
  }
});