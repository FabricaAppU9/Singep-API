// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('singep', ['ionic', 'ngCordova','singep.controller'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.navBar.alignTitle('center')
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'HomeCtrl',
	onEnter: function($state, $window){
       if (window.localStorage['token']) {
			token = window.localStorage['token'];
      
		}
		if(typeof token == "undefined" || token.length < 5){
			$state.go('login');
	    }
    }
  })

    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: "LoginCtrl",
	onEnter: function($state, $window){
       if (window.localStorage['token']) {
			token = window.localStorage['token'];
		}
		if(typeof token != "undefined" && token.length > 5){
			$state.go('app.home');
	    }
    }
      
    
  })

    .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: "HomeCtrl"
      }
    }
  })


    .state('app.magenda', {
    url: '/magenda',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/magenda.html',
        controller:"MagendaCtrl"
      }
    }
  })

    .state('app.notificacoes', {
    url: '/notificacoes',
    views: {
      'menuContent': {
        templateUrl: 'templates/notificacoes.html',
        controller: "NotificacoesCtrl"
      }
    }
  })

  .state('app.palestrantes', {
    url: '/palestrantes',
    views: {
      'menuContent': {
        templateUrl: 'templates/palestrantes.html',
        controller: "PalestrantesCtrl"
      }
    }
  })

.state('app.detalhepalestrante', {
      url: '/detalhepalestrante/{palestranteId}',
      views: {
        'menuContent': {
          templateUrl: 'templates/detalhepalestrante.html',
          controller: 'PalestranteDetalheCtrl'
        }
      }
    })


  .state('app.autores', {
      url: '/autores',
      views: {
        'menuContent': {
          templateUrl: 'templates/autores.html',
          controller: "AutoresCtrl"
        }
      }
    })



	
    .state('app.artigosbyautor', {
      url: '/artigos/{autorId}/{area}/{tema}/{data}/{horario}',
      views: {
        'menuContent': {
          templateUrl: 'templates/artigos.html',
          controller: 'ArtigosCtrl'
        }
      }
    })


      .state('app.artigosbyareatema', {
      url: '/artigos/{autorId}/{area}/{tema}/{data}/{horario}',
      views: {
        'menuContent': {
          templateUrl: 'templates/artigos.html',
          controller: 'ArtigosCtrl'
        }
      }
    })



    .state('app.detalheartigo', {
      url: '/detalheartigo/{artigoId}/{isAlreadyRegistered}',
      views: {
        'menuContent': {
          templateUrl: 'templates/detalheartigo.html',
          controller: 'ArtigosDetalheCtrl'
        }
      }
    })


.state('app.artigos', {
      url: '/artigos',
      views: {
        'menuContent': {
          templateUrl: 'templates/artigos.html',
          controller: 'ArtigosCtrl'
        }
      }
    })


.state('app.buscarartigos', {
      url: '/buscarartigos',
      views: {
        'menuContent': {
          templateUrl: 'templates/buscarartigos.html',
          controller: 'BuscarArtigosCtrl'
        }
      }
    })

.state('app.buscarartigosareatema', {
      url: '/buscarartigosareatema',
      views: {
        'menuContent': {
          templateUrl: 'templates/buscarartigosareatema.html',
          controller: 'BuscarArtigosCtrl'
        }
      }
    })


      .state('app.sobre', {
      url: '/sobre',
      views: {
        'menuContent': {
          templateUrl: 'templates/sobre.html',
          controller: 'SobreCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');
  

  
  
});
