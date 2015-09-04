// I control the main demo.
app.controller("publicCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {
    scope.items = [{
      'description': 'Web Systems'
    }, {
      'description': 'Innovation'
    }, {
      'description': 'Coming Soon'
    }];
  }
]);
