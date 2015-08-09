#= require 'contact/contact'

'use strict'

angular.module('app.contact', [
  'ui.router'
])

.config ($stateProvider, headerProvider) ->
  $stateProvider
    .state 'contact',
      url: '/contact'
      templateUrl: 'contact/contact'
      controller: 'contactController'

  headerProvider.register name: 'contact', sref: 'contact'

.controller 'contactController', ($scope) ->
  console.log 'contact controller'
  return true
