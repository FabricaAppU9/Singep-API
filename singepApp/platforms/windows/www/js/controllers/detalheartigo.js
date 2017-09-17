app.controller('ArtigosDetalheCtrl', function($scope,$state,$stateParams,ArtigosService,AgendaService,$window,$ionicPopup,$ionicHistory){
	var isAlreadyRegistered = $stateParams.isAlreadyRegistered;
		$scope.showRegisterButton = true;
		$scope.showCancelButton = true;
	if (isAlreadyRegistered == 0){
		$scope.showRegisterButton = false;
		$scope.showCancelButton = true;
		
	}else{
		$scope.showRegisterButton = true;
		$scope.showCancelButton = false;

	}

	
	var artigoId = $stateParams.artigoId;
	
	$scope.detalheArtigo=[];
	ArtigosService.getDetalheArtigo($window.localStorage['token'],artigoId).then(function(response){
		
		$scope.detalheArtigo = response.data.detalhe_artigo[0];
	});


	$scope.setRemover = function(_idArtigo){
		console.log(_idArtigo);
		AgendaService.setRemover($window.localStorage['token'],_idArtigo).then(function(response){
		if(typeof response.data.retorno != "undefined" & response.data.retorno == "Agendamento cancelado com sucesso!"){
			$ionicPopup.alert({
				title:'Aviso',
				template:response.data.retorno
			});
			
			$state.go("app.magenda");
		}else{
			$ionicPopup.alert({
				title:'Aviso',
				template:'Não foi possível cancelar esse agendamento.'
			});
		}
		
	});		
	}

	$scope.getArtigoPdf = function(_artigoId){
		window.open('http://singep.esy.es/api/download/'+_artigoId+'.pdf','_system');
	}

	$scope.setAgendar = function(_artigoId){
		AgendaService.setAgendar($window.localStorage['token'],_artigoId).then(function(response){
		
		if(response.data != "undefined" && response.data.codigo_artigo != ""){
            
            $ionicPopup.alert({
                        title:"Aviso",
                        template: "Agendamento efetuado com sucesso."
                    });
        	$scope.showRegisterButton = false;
        	$scope.showCancelButton   = true;
        	$state.go("app.magenda");
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