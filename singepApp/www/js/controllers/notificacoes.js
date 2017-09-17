app.controller('NotificacoesCtrl', function($scope,$state,$ionicLoading,NotificacoesService,$ionicPopup,$window){
	
	$scope.openUrl = function(url){
		if (url !=null && url != ""){
			window.open(url);
		}
	}
	
	$scope.listaNotificacoes = [];
	NotificacoesService.getAll($window.localStorage['token']).then(function(response){
		$scope.listaNotificacoes = response.data;
		
		$window.localStorage['qtdNotification'] = $scope.listaNotificacoes.length;

	});

	
})

