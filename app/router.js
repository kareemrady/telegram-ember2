import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('login', {path: '/'});
  this.route('signup', {path: '/signup'});
  this.route('reset', {path: '/reset'});
  this.route('reset-success', {path: '/reset-success'});
  this.route('dashboard', {path: '/dashboard'});
  this.resource('users', {path: '/:user_id'}, function(){
    this.route('followers');
    this.route('following');
    this.route('posts');
  });
});
