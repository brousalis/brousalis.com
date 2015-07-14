#= require 'home/home'

'use strict'

angular.module('app.home', [
  'ui.router'
])

.config ($stateProvider, sidebarProvider) ->
  $stateProvider
    .state 'home',
      url: '/'
      templateUrl: 'home/home'
      controller: 'homeController'

  sidebarProvider.register name: 'home', sref: 'home'

.controller 'homeController', ($scope) ->
  console.log 'home controller'
  return true
