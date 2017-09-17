app.controller('ArtigosCtrl', function($scope,$state,$stateParams,ArtigosService,AgendaService,$window,$ionicPopup){
	var autorId = $stateParams.autorId;
	$scope.showRegisterButton = true;
	if(autorId != 0){
	
	$scope.listaArtigos = [];
	ArtigosService.getArtigosByAutor($window.localStorage['token'],autorId).then(function(response){
		$scope.listaArtigos = response.data;
		if($scope.listaArtigos.retorno == "null" || $scope.listaArtigos.length == 0){
				$state.go('app.autores');	
				$ionicPopup.alert({
	    				title:"Aviso",
	    				template:"Nenhum artigo encontrado."
    				});
			}
	});

	}else{
		var area = $stateParams.area;
		var tema = $stateParams.tema;
		var data = $stateParams.data;
		var horario = $stateParams.horario;

		ArtigosService.getArtigosByAreaTema($window.localStorage['token'],area,tema,data,horario).then(function(response){
		$scope.listaArtigos = response.data;

		
			if($scope.listaArtigos.retorno == "null" || $scope.listaArtigos.length == 0){
				$state.go('app.buscarartigosareatema');	
				$ionicPopup.alert({
	    				title:"Aviso",
	    				template:"Nenhum artigo encontrado."
    				});
			}
		});
	}

	$scope.getDetalheArtigo = function(_artigoId){
		$state.go('app.detalheartigo',{artigoId:_artigoId})
		
	}

	$scope.setAgendar = function(_artigoId){
		AgendaService.setAgendar($window.localStorage['token'],_artigoId).then(function(response){
		console.log(JSON.stringify(response,null,4));
		
		if(response.data != "undefined" && response.data.codigo_artigo != ""){
           
            $ionicPopup.alert({
                        title:"Aviso",
                        template: "Agendamento efetuado com sucesso."
                    });
            	$state.go('app.magenda');
            
        }
        else{
           
            $ionicPopup.alert({
                        title:"Aviso",
                        template:"Não foi possível registrar o artigo."
                    });
        }
		});

	}
		
		

});