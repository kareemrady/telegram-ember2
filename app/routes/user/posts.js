import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('post');
  },
  rederTemplate: function(controller){
    this.render('user.index', {controller: controller});
  }
 });
