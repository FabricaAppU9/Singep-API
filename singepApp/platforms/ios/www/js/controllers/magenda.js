app.controller('MagendaCtrl', function($scope,$state,AgendaService,$window,$ionicPopup){
	
	$scope.listaArtigos = [];
	AgendaService.getAll($window.localStorage['token']).then(function(response){
		$scope.listaArtigos = response.data;
		
		if($scope.listaArtigos.retorno == "null" || $scope.listaArtigos.length == 0){
			$state.go("app.home");
			$ionicPopup.alert({
				title:'Aviso',
				template:'Você não possui agendamentos.'
			});
		}else{
			
		}

	});

	$scope.desagendar = function(_idArtigo){

	}

	$scope.setAgendar = function(_idArtigo){
		AgendaService.setAgendar($window.localStorage['token'],_idArtigo).then(function(response){
		
	});		
	}

	$scope.setRemover = function(_idArtigo,_index){
		AgendaService.setRemover($window.localStorage['token'],_idArtigo).then(function(response){
		if(typeof response.data.retorno != "undefined" & response.data.retorno == "Agendamento cancelado com sucesso!"){
			$ionicPopup.alert({
				title:'Aviso',
				template:response.data.retorno
			});
			$scope.listaArtigos.splice(_index,1);
		}else{
			$ionicPopup.alert({
				title:'Aviso',
				template:'Não foi possível cancelar esse agendamento.'
			});
		}
		
	});		
	}	

});