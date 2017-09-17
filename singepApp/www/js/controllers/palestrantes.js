app.controller('PalestrantesCtrl', function($scope,$state,PalestrantesService,$window,$ionicPopup){
	
	$scope.listaPalestrantes = [];
	
	PalestrantesService.getAll($window.localStorage['token']).then(function(response){
		$scope.listaPalestrantes = response.data;
		if($scope.listaPalestrantes.retorno == "null" || $scope.listaPalestrantes.length == 0){	
				$ionicPopup.alert({
	    				title:"Aviso",
	    				template:"Não foi possível carregar lista de palestrantes."
    				});
			}
	});
});