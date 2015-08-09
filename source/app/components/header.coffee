#= require 'components/header'

'use strict'

# Define Angular module
angular.module('components.header', [
  'ui.router'
])

.directive 'header', ($state, header) ->
  restrict: 'EA'
  replace: true
  templateUrl: 'components/header'
  transclude: true

  link: (scope, iElemen, iAttrs) ->
    scope.items = header.get()

    setActive = (state = $state) ->
      if state.current? then state = state.current

      for item, idx in scope.items
        # First set each header item to inactive
        item.active = false
        scope.items[idx] = item

        # Then override the setting if it is the current state
        if item.sref is state.name
          item.active = true
          scope.items[idx] = item

    scope.$on '$stateChangeStart', (evt, toState) ->
      setActive(toState)

    setActive()

# Setup the service which will register items for the header directive
.provider 'header', ->
  items = []

  register: (item) ->
    items.push(item)
    this # Return `this` instance to allow chaining registering items

  # Instance API
  $get: ['$cacheFactory', ($cacheFactory) ->
    itemsCache = $cacheFactory('itemsCache')

    parse = ->
      return itemsCache.get('items') if itemsCache.get('items')
      itemsCache.put('items', items)
      items

    get: -> parse()
  ]
