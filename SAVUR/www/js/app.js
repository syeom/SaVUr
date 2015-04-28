// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ui.router','starter.controllers','ngCordova','ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (window.cordova) {
        console.log("Cordova Works");
    }
    if (window.cordova && window.cordova.plugins.Keyboard) {
      console.log("Second if works");
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('app.home', {
    cache: false,
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'HomeCtrl'
      }
    }
  })

 .state('app.intro', {
    url: "/intro",
    views: {
      'menuContent': {
        templateUrl: "templates/intro.html",
        controller: 'IntroCtrl'
      }
    }
  })

  .state('app.profile', {
    cache: false,
    url: "/profile",
    views: {
      'menuContent': {
        templateUrl: "templates/profile.html",
        controller: 'ProfileCtrl'
      }
    },
  })
  
      .state('app.reportAssault', {
    url: "/reportAssault",
    views: {
      'menuContent': {
        templateUrl: "templates/reportAssault.html",
        controller: 'ReportAssaultCtrl'
      }
    }
  })
  
    .state('app.talk', {
    url: "/talk",
    views: {
      'menuContent': {
        templateUrl: "templates/talk.html",
        controller: 'TalkCtrl'
      }
    }
  })
  
   .state('app.map', {
    url: "/map",
    views: {
      'menuContent': {
        templateUrl: "templates/map.html",
        controller: 'MapCtrl'
      }
    }
  })
  
    .state('app.medicalHelp', {
    url: "/medicalHelp",
    views: {
      'menuContent': {
        templateUrl: "templates/medicalHelp.html",
        controller: 'MedicalHelpCtrl'
      }
    }
  })
  
    .state('app.Information', {
    url: "/information",
    views: {
      'menuContent': {
        templateUrl: "templates/information.html",
        controller: 'InformationCtrl'
      }
    }
  })
  
  .state('app.BeforeYouGo', {
    url: "/beforeYouGo",
    views: {
      'menuContent': {
        templateUrl: "templates/beforeYouGo.html",
        controller: 'BeforeYouGoCtrl'
      }
    }
  })
  
   .state('app.GettingThere', {
    url: "/gettingThere",
    views: {
      'menuContent': {
        templateUrl: "templates/gettingThere.html",
        controller: 'GettingThereCtrl'
      }
    }
  })

  .state('app.talkOnCampus', {
    url: "/talkOnCampus",
    views: {
      'menuContent': {
        templateUrl: "templates/talkOnCampus.html",
        controller: 'TalkOnCampusCtrl'
      }
    }
  })

  .state('app.talkOffCampus', {
    url: "/talkOffCampus",
    views: {
      'menuContent': {
        templateUrl: "templates/talkOffCampus.html",
        controller: 'TalkOffCampusCtrl'
      }
    }
  })

  .state('app.sexualAssaultPamphlet', {
    url: "/sexualAssaultPamphlet",
    views: {
      'menuContent': {
        templateUrl: "templates/sexualAssaultPamphlet.html",
        controller: 'SexualAssaultPamphletCtrl'
      }
    }
  })

  .state('app.novawebsite', {
    url: "/novawebsite",
    views: {
      'menuContent': {
        templateUrl: "templates/novawebsite.html",
        controller: ''
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  if (window.localStorage.getItem('persistent') == 'true' )
    $urlRouterProvider.otherwise('/app/home');
  else 
    $urlRouterProvider.otherwise('/app/intro');
});



