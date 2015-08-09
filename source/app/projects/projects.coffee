#= require 'projects/projects'

'use strict'

angular.module('app.projects', [
  'ui.router'
])

.config ($stateProvider, headerProvider) ->
  $stateProvider
    .state 'projects',
      url: '/'
      templateUrl: 'projects/projects'
      controller: 'projectsController'

  headerProvider.register name: 'projects', sref: 'projects'

.controller 'projectsController', ($scope) ->
  console.log 'projects controller'
  return true
