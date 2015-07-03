#= require 'main/main'

'use strict'

angular.module('app.main', [
  'ui.router'
])

.config ($stateProvider) ->
  $stateProvider
    .state 'main.main',
      url: '/main'
      templateUrl: 'main/main'
      controller: 'appMainController'

.controller 'appMainController', ($scope) ->
  console.log 'main controller'
