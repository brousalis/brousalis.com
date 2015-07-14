#= require 'about/about'

'use strict'

angular.module('app.about', [
  'ui.router'
  'components.sidebar'
])

.config ($stateProvider, sidebarProvider) ->
  $stateProvider
    .state 'about',
      url: '/about'
      templateUrl: 'about/about'
      controller: 'aboutController'

  sidebarProvider.register name: 'about', sref: 'about'

.controller 'aboutController', ($scope) ->
  console.log 'about controller'
  return true
