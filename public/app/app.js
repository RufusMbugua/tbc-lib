var app = angular.module("research_lab", ['ui.router', 'restangular',
  'smart-table',
  'chart.js', 'textAngular', 'angularMoment', 'ui.bootstrap',
  'highcharts-ng', 'leaflet-directive', 'sn.skrollr', 'duScroll', 'slick'
]);

app.config(function(RestangularProvider) {});


app.run(['$http', '$rootScope', function($http, $rootScope) {
  $rootScope.date = new Date();
  $rootScope.title = 'The Book Club';
  $rootScope.messages = [];
  $rootScope.menu = [];
}]);
app.run(["snSkrollr", function(snSkrollr) {
  snSkrollr.init();
}])
