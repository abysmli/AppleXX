angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html',
      controller: 'menuCtrl'
    })

    .state('menu.tabsController', {
      url: '/tabs',
      views: {
        'menuContent': {
          templateUrl: 'templates/tabsController.html'
        }
      }
    })

    .state('menu.tabsController.mainPage', {
      url: '/index',
      views: {
        'home': {
          templateUrl: 'templates/mainPage.html',
          controller: 'mainPageCtrl'
        }
      }
    })            
  
    .state('menu.tabsController.myPage', {
      url: '/myinfo',
      views: {
        'myinfo': {
          templateUrl: 'templates/myPage.html',
          controller: 'myPageCtrl'
        }
      }
    })

    .state('menu.tabsController.shops', {
      url: '/shops',
      views: {
        'home': {
          templateUrl: 'templates/shops.html',
          controller: 'shopsCtrl'
        }
      }
    })
        
    .state('menu.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
        
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
    .state('menu.scanQR-Code', {
      url: '/scanQRCode',
      views: {
        'menuContent': {
          templateUrl: 'templates/scanQR-Code.html',
          controller: 'scanQR-CodeCtrl'
        }
      }
    })        
      
    .state('menu.aboutUs', {
      url: '/aboutus',
      views: {
        'menuContent': {
          templateUrl: 'templates/aboutUs.html',
          controller: 'aboutUsCtrl'
        }
      }
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/tabs/index');

});