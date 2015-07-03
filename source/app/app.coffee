#= require 'layouts/application'

'use strict'

modules = [
  'templates'
  'ui.router'
  'app.main'
]

angular.module('app', modules)

.constant 'CONFIG',
  APPLICATION_SECRET: Settings.APPLICATION_SECRET

.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
    .state 'main',
      abstract: true
      templateUrl: 'layouts/application'
      controller: 'appController'

  $urlRouterProvider.otherwise('/main').when('/', 'main')

.controller 'appController', ($scope) ->
  console.log 'app controller'
