'use strict'

modules = [
  'templates'
  'ui.router'

  'app.about'
  'app.contact'
  'app.home'
  'app.projects'
  'app.work'
]

angular.module('app', modules)

.constant 'CONFIG',
  APPLICATION_SECRET: Settings.APPLICATION_SECRET

.config ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider.otherwise('/')
