app.controller('AutoresCtrl', function($scope,$state,$ionicLoading,AutoresService,$ionicPopup,$window){
	$scope.data = [];

	$scope.getArtigos = function(_autorId){
		$state.go('app.artigosbyautor',{autorId:_autorId})
		
	}

	$scope.onTextChange = function(){
		if($scope.data.txtBusca.length >= 3){
			AutoresService.getAutorByNome($window.localStorage['token'],$scope.data.txtBusca).then(function(response){
				if(typeof response.data != "undefined"){
					 $scope.listaAutores = response.data;
				}else{
					 $scope.listaAutores = [];
				}
			})
		}else{
			$scope.listaAutores = [];
		}
		
	}

})

