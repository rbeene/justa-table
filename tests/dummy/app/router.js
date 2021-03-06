import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('examples', function() {
    this.route('basic-table');
    this.route('fixed-column-table');
    this.route('resizable-columns-table');
    this.route('infinite-loader-table');
    this.route('collapsable-table');
    this.route('collapsable-table-with-ajax');
    this.route('group-by-name');
    this.route('fixed-height-table');
    this.route('sticky-header-table');
  });
});

export default Router;
