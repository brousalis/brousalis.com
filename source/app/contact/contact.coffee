#= require 'contact/contact'

'use strict'

angular.module('app.contact', [
  'ui.router'
])

.config ($stateProvider, sidebarProvider) ->
  $stateProvider
    .state 'contact',
      url: '/contact'
      templateUrl: 'contact/contact'
      controller: 'contactController'

  sidebarProvider.register name: 'contact', sref: 'contact'

.controller 'contactController', ($scope) ->
  console.log 'contact controller'
  return true
