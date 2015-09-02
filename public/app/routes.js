app.config(function($stateProvider, $urlRouterProvider) {

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
