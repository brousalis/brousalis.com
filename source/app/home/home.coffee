#= require 'home/home'

'use strict'

angular.module('app.home', [
  'ui.router'
])

.config ($stateProvider, headerProvider) ->
  $stateProvider
    .state 'home',
      url: '/'
      templateUrl: 'home/home'
      controller: 'homeController'

  headerProvider.register name: 'home', sref: 'home'

.controller 'homeController', ($scope) ->
  console.log 'home controller'
  return true
