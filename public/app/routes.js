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
    }).state('public', {
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
    }).state('public.home', {
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
    }).state('login', {
        url: '/login',
        views: {
            '': {
                controller: 'accountCtrl',
                templateUrl: 'app/partials/account/login.html',
            }
        }
    }).state('account', {
        views: {
            '': {
                controller: 'accountCtrl',
                templateUrl: 'app/partials/account/index.html',
            },
            'header@account': {
                controller: 'accountCtrl',
                templateUrl: 'app/partials/account/header.html',
            },
            'footer@account': {
                controller: 'accountCtrl',
                templateUrl: 'app/partials/account/footer.html',
            }
        }
    }).state('account.dashboard', {
        url: '/dashboard',
        views: {
            '': {
                templateUrl: 'app/partials/account/dashboard.html',
            },
            'latest@account.dashboard': {
                templateUrl: 'app/partials/account/latest.html'
            },
            'last-borrowed@account.dashboard': {
                templateUrl: 'app/partials/account/last-borrowed.html'
            },
            'overdue@account.dashboard': {
                templateUrl: 'app/partials/account/overdue.html'
            }
        }
    }).state('account.browse', {
        url: '/browse',
        views: {
            '': {
                templateUrl: 'app/partials/account/browse.html',
            },
            'genres@account.browse': {
                templateUrl: 'app/partials/account/genres.html'
            },
            'results@account.browse': {
                templateUrl: 'app/partials/account/results.html'
            }
        }
    })
    .state('account.my-books', {
        url: '/my-books',
        views: {
            '': {
                controller:'BookCtrl',
                templateUrl: 'app/partials/account/my-books.html',
            },
            'genres@account.my-books': {
                templateUrl: 'app/partials/account/genres.html'
            },
            'book-list@account.my-books': {
                templateUrl: 'app/partials/account/book-list.html'
            }
        }
    })
    .state('account.book', {
        controller:'BookCtrl',
        url:'/book',
        templateUrl:'app/partials/account/book.html'
    })
    .state('account.book.add', {
        url: '/add',
        views: {
            '': {
                templateUrl: 'app/partials/account/book-add.html',
            }
        }
    })
    ;
});