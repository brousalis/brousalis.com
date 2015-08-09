#= require 'work/work'

'use strict'

angular.module('app.work', [
  'ui.router'
])

.config ($stateProvider, headerProvider) ->
  $stateProvider
    .state 'work',
      url: '/'
      templateUrl: 'work/work'
      controller: 'workController'

  headerProvider.register name: 'work', sref: 'work'

.controller 'workController', ($scope) ->
  console.log 'work controller'
  return true
