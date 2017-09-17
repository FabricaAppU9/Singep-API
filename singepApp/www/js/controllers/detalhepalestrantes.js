app.controller('PalestranteDetalheCtrl', function($scope,$state,$stateParams,PalestrantesService,$window,$ionicPopup){
	var palestranteId = $stateParams.palestranteId;
	
	PalestrantesService.getDetalhePalestrante($window.localStorage['token'],palestranteId).then(function(response){
		
		$scope.detalhePalestrante = response.data;
		 



	});

	

});