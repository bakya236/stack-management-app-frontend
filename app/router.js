import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('stacks');
  this.route('usage-history', { path: '/usagehistory/:stack_id'});
});

export default Router;
