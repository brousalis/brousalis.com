#= require 'about/about'

'use strict'

angular.module('app.about', [
  'ui.router'
  'components.header'
])

.config ($stateProvider, headerProvider) ->
  $stateProvider
    .state 'about',
      url: '/about'
      templateUrl: 'about/about'
      controller: 'aboutController'

  headerProvider.register name: 'about', sref: 'about'

.controller 'aboutController', ($scope) ->
  console.log 'about controller'
  return true
