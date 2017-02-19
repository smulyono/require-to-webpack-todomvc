/*global require*/
'use strict';

require("todomvc-common/base");

require([
  'backbone',
  'views/app',
  'routers/router'
], function (Backbone, AppView, Workspace) {
  /*jshint nonew:false*/
  // Initialize routing and start Backbone.history()
  new Workspace();
  Backbone.history.start();

  // Initialize the application view
  new AppView();
});
