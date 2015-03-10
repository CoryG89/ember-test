import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log("posts route executed");
    return this.store.find('post', 1);
  }
});