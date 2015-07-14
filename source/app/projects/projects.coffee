#= require 'projects/projects'

'use strict'

angular.module('app.projects', [
  'ui.router'
])

.config ($stateProvider, sidebarProvider) ->
  $stateProvider
    .state 'projects',
      url: '/'
      templateUrl: 'projects/projects'
      controller: 'projectsController'

  sidebarProvider.register name: 'projects', sref: 'projects'

.controller 'projectsController', ($scope) ->
  console.log 'projects controller'
  return true
