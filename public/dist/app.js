var app = angular.module("research_lab", ['ui.router', 'restangular',
  'smart-table',
  'chart.js', 'textAngular', 'angularMoment', 'ui.bootstrap',
  'highcharts-ng', 'leaflet-directive', 'sn.skrollr', 'duScroll', 'slick'
]);

app.config(function(RestangularProvider) {});


app.run(['$http', '$rootScope', function($http, $rootScope) {
  $rootScope.date = new Date();
  $rootScope.title = 'Research Lab';
  $rootScope.messages = [];
  $rootScope.menu = [];
}]);
app.run(["snSkrollr", function(snSkrollr) {
  snSkrollr.init();
}])
;// I control the main demo.
app.controller("accountCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {}
]);
;// I control the main demo.
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
;// I control the main demo.
app.controller("accountCtrl", ['$scope', '$filter', '$timeout', '$state',
  'Restangular', '$http', '$rootScope',
  function(scope, filter, timeout, state, Restangular, $http, rootScope) {}
]);
;app.directive('isActiveNav', ['$location', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath) {
        if ('#' + currentPath == element[0].hash) {
          element.parent().addClass('active');
        } else {
          element.parent().removeClass('active');
        }
      });
    }
  };
}]);

app.directive('isActiveLink', ['$location', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath) {
        if ('#' + currentPath == element[0].hash) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      });
    }
  };
}]);
;app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  /**
   * Default Route
   * @param  {[type]} "/account/expenditure" [description]
   * @return {[type]}                        [description]
   */
  $urlRouterProvider.otherwise("/home");

  // Now set up the states
  /**
   * [state description]
   * @param  {[type]} 'test'       [description]
   * @param  {[type]} {                                                            url: '/test' [description]
   * @param  {[type]} views:       {                                                                          '':           {        controller: 'publicCtrl' [description]
   * @param  {[type]} templateUrl: 'app/partials/public/index.html' [description]
   * @param  {[type]} }                                                            }            }             [description]
   * @return {[type]}              [description]
   */
  $stateProvider.state('test', {
      url: '/test',
      views: {
        '': {
          controller: 'publicCtrl',
          templateUrl: 'app/partials/test/index.html',
        }
      }
    })
    .state('public', {
      views: {
        '': {
          controller: 'publicCtrl',
          templateUrl: 'app/partials/public/index.html',
        },
        'header@public': {
          templateUrl: 'app/partials/public/header.html',
        },
        'footer@public': {
          templateUrl: 'app/partials/public/footer.html',
        }
      }
    })
    .state('public.home', {
      url: '/home',
      views: {
        '': {
          templateUrl: 'app/partials/public/home.html'
        },
        'banner@public.home': {
          templateUrl: 'app/partials/public/banner.html'
        },
        'portfolio@public.home': {
          templateUrl: 'app/partials/public/portfolio.html'
        },
        'careers@public.home': {
          templateUrl: 'app/partials/public/careers.html'
        },
      }
    })
    .state('login', {
      url: '/login',
      views: {
        '': {
          controller: 'accountCtrl',
          templateUrl: 'app/partials/account/login.html',
        }
      }
    });
});
;angular.module('templates-dist', ['../public/app/partials/account/index.html', '../public/app/partials/account/login.html', '../public/app/partials/portfolio/index.html', '../public/app/partials/portfolio/list.html', '../public/app/partials/public/banner.html', '../public/app/partials/public/careers.html', '../public/app/partials/public/footer.html', '../public/app/partials/public/header.html', '../public/app/partials/public/home.html', '../public/app/partials/public/index.html', '../public/app/partials/public/map.html', '../public/app/partials/public/portfolio.html', '../public/app/partials/test/index.html']);

angular.module("../public/app/partials/account/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/index.html",
    "");
}]);

angular.module("../public/app/partials/account/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/account/login.html",
    "<div class=\"full content\">\n" +
    "  <form action=\"\" class=\"ui form\" class=\"left-form\" id=\"login\">\n" +
    "    <h3 class=\"ui header\">\n" +
    "      Login\n" +
    "    </h3>\n" +
    "    <div class=\"inner\">\n" +
    "    <div class=\"ui input\">\n" +
    "      <label for=\"\">Username</label>\n" +
    "      <input type=\"text\" placeholder=\"John Doe\">\n" +
    "    </div>\n" +
    "    <div class=\"ui input\">\n" +
    "      <label for=\"\">Password</label>\n" +
    "      <input type=\"password\" placeholder=\"Enter Password Here...\">\n" +
    "    </div>\n" +
    "    <div class=\"ui green button\">Login</div>\n" +
    "      </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/portfolio/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/portfolio/index.html",
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/portfolio/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/portfolio/list.html",
    "");
}]);

angular.module("../public/app/partials/public/banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/banner.html",
    "<div class=\"image-wrapper\" style=\"height:100%\">\n" +
    "  <div slick dots=true infinite=true speed=300 slides-to-show=1 touch-move=true slides-to-scroll=1 arrows=\"true\"\n" +
    "  autoplay=\"true\" autoplaySpeed=\"1000\"\n" +
    "  >\n" +
    "      <div ng-repeat=\"item in items\">\n" +
    "          <div class=\"description\">\n" +
    "            <h2 class=\"bottom\"\n" +
    "            sn-skrollr\n" +
    "            data-start=\"bottom:300\"\n" +
    "            data--80p-top=\"bottom:50\"\n" +
    "            ng-bind=\"item.description\"></h2>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/careers.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/careers.html",
    "<div id=\"careers\" class=\"content\">\n" +
    "  <h2>Careers</h2>\n" +
    "  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae corrupti beatae nesciunt\n" +
    "     excepturi quaerat cum officia ab, ipsa praesentium labore provident libero, numquam vel\n" +
    "     impedit facilis, nisi dolorum consectetur neque!</p>\n" +
    "     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
    "       Eligendi tempora recusandae voluptatem natus dignissimos\n" +
    "       commodi itaque officiis, accusamus adipisci obcaecati tempore laboriosam suscipit debitis\n" +
    "        maiores, at, sint qui. Voluptatum, rerum.</p>\n" +
    "        <p>\n" +
    "          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
    "          Error mollitia assumenda incidunt ab, eveniet ipsum ipsa nemo aut\n" +
    "          laboriosam, tenetur? Ex eaque modi corporis impedit labore pariatur, eius\n" +
    "          dicta molestias.\n" +
    "        </p>\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col-md-12\">\n" +
    "            <h3>Instructions</h3>\n" +
    "            <ol>\n" +
    "              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque recusandae neque in quas omnis suscipit, animi vitae eaque. Ea odio neque quidem, saepe sit maiores eius iure illum natus</li>\n" +
    "              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque recusandae neque in quas omnis suscipit, animi vitae eaque. Ea odio neque quidem, saepe sit maiores eius iure illum natus</li>\n" +
    "              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque recusandae neque in quas omnis suscipit, animi vitae eaque. Ea odio neque quidem, saepe sit maiores eius iure illum natus</li>\n" +
    "              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque recusandae neque in quas omnis suscipit, animi vitae eaque. Ea odio neque quidem, saepe sit maiores eius iure illum natus</li>\n" +
    "              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis atque recusandae neque in quas omnis suscipit, animi vitae eaque. Ea odio neque quidem, saepe sit maiores eius iure illum natus</li>\n" +
    "            </ol>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-12\">\n" +
    "            <h3>Apply</h3>\n" +
    "            <form action=\"\">\n" +
    "              <div class=\"form-group\">\n" +
    "                <label for=\"\">Email Address</label>\n" +
    "                <input type=\"text\" class=\"form-control\" placeholder=\"e.g mbugua@example.com\">\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label for=\"\">Cover Letter</label>\n" +
    "                <textarea type=\"text\" class=\"form-control\" rows=\"5\" placeholder=\"e.g I really love coding...\"></textarea>\n" +
    "              </div>\n" +
    "              <div class=\"form-group\">\n" +
    "                <label for=\"\">Resume</label>\n" +
    "                <input type=\"file\" class=\"form-control\">\n" +
    "              </div>\n" +
    "              <button class=\"btn btn-default\">\n" +
    "                Submit\n" +
    "              </button>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-6\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/footer.html",
    "");
}]);

angular.module("../public/app/partials/public/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/header.html",
    "<nav id=\"main\"\n" +
    "sn-skrollr\n" +
    "    data-start=\"position:absolute;top:0;width:100%;background:rgba(255,255,255,0.00001)\"\n" +
    "    data--90p-top=\"padding:5px;position:fixed;width:100%;background:rgba(44, 62, 80,1.0);z-index:100\"\n" +
    ">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <a class=\"navbar-brand\" href=\"#\">\n" +
    "        Research <span class=\"blue\">Lab</span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "          <li><a du-smooth-scroll du-scroll-spy=\"anchor\" href=\"#banner\">About</a></li>\n" +
    "          <li><a du-smooth-scroll offset=\"50\" du-scroll-spy=\"anchor\" href=\"#portfolio\">Portfolio</a></li>\n" +
    "          <li><a du-smooth-scroll offset=\"50\" du-scroll-spy=\"anchor\" href=\"#careers\">Careers</a></li>\n" +
    "          <li><a href=\"\">Blog</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "");
}]);

angular.module("../public/app/partials/public/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/home.html",
    "<div id=\"banner\" ui-view=\"banner\"></div>\n" +
    "<div ui-view=\"map\"></div>\n" +
    "<div ui-view=\"portfolio\"></div>\n" +
    "<div ui-view=\"careers\"></div>\n" +
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/index.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../public/app/partials/public/map.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/map.html",
    "");
}]);

angular.module("../public/app/partials/public/portfolio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/public/portfolio.html",
    "<div id=\"portfolio\" class=\"content\">\n" +
    "  <h3>Portfolio</h3>\n" +
    "  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae corrupti beatae nesciunt\n" +
    "     excepturi quaerat cum officia ab, ipsa praesentium labore provident libero, numquam vel\n" +
    "     impedit facilis, nisi dolorum consectetur neque!</p>\n" +
    "     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
    "       Eligendi tempora recusandae voluptatem natus dignissimos\n" +
    "       commodi itaque officiis, accusamus adipisci obcaecati tempore laboriosam suscipit debitis\n" +
    "        maiores, at, sint qui. Voluptatum, rerum.</p>\n" +
    "        <p>\n" +
    "          Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
    "          Error mollitia assumenda incidunt ab, eveniet ipsum ipsa nemo aut\n" +
    "          laboriosam, tenetur? Ex eaque modi corporis impedit labore pariatur, eius\n" +
    "          dicta molestias.\n" +
    "        </p>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../public/app/partials/test/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../public/app/partials/test/index.html",
    "<h1>Test Page</h1>\n" +
    "");
}]);
