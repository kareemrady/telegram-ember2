import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
      createUser: function(){
      var user = this.store.createRecord('user', {
        id: this.get('userName'),
        password: this.get('password'),
        operation: 'login'

      });
      var controller = this;
      user.save().then(function(user) {
        controller.set('session.user', user);
        controller.transitionToRoute('dashboard');
}, function(response) {
  //
});

    }
  }
});
