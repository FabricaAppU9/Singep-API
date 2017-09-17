app.controller('BuscarArtigosCtrl', function($scope,$state,$ionicLoading,ArtigosService,AgendaService,$ionicPopup,$window, ApoioService){
    $scope.data = [];
    $scope.listaArtigos = [];
    $scope.temas=[];
    $scope.temasAll=[];
    $scope.areas=[];
    $scope.horarios=[];
    $scope.datas=[];
    $scope.datasAll=[];
    $scope.showRegisterButton = true;

 

    ApoioService.area.getAll($window.localStorage['token']).then(function(response){
        if(typeof response != "undefined" && typeof response.data != "undefined"){
                     $scope.areas = response.data;
                }else{
                     $scope.areas = [];
                }
    });

    ApoioService.tema.getAreaTemas($window.localStorage['token']).then(function(response){
        if(typeof response != "undefined" &&  typeof response.data != "undefined"){
                     $scope.temasAll = response.data.area_tema;
                }else{
                     $scope.temasAll = [];
                }
    });

    ApoioService.data.getDataHorario($window.localStorage['token']).then(function(response){
        
        $scope.horarios=[];
        $scope.datas=[];
        $scope.datas.push({codigo_data:0,data:"null",dia_semana:"Todos"});
        if(typeof response != "undefined" && typeof response.data != "undefined"){
                     $scope.datasAll = response.data;
                     $scope.horarios=[];
        

         angular.forEach($scope.datasAll, function(value, key) {
            var existe = false;
            angular.forEach($scope.datas, function(value1, key1) {
                if($scope.datas[key1].codigo_data!= undefined && $scope.datas[key1].codigo_data==$scope.datasAll[key].codigo_data){
                    existe=true;
                }
            });
            if(!existe){
                $scope.datas.push({codigo_data:$scope.datasAll[key].codigo_data,data:$scope.datasAll[key].data,dia_semana:$scope.datasAll[key].dia_semana})
            }
             
        });
           

                }else{
                     $scope.datasAll = [];
                }
    });


    
    $scope.areaSelecionada = [];
    

    $scope.updateTema = function(){
        $scope.temas=[];
         angular.forEach($scope.temasAll, function(value, key) {  
            if($scope.temasAll[key].codigo_area == $scope.data.area.codigo_area){
                    angular.forEach($scope.temasAll[key].temas,function(value1,key1){
                        $scope.temas.push($scope.temasAll[key].temas[key1]);
                    });
               
            }
            
        });
    }

    $scope.updateHorarios = function(){

        $scope.horarios=[];
         angular.forEach($scope.datasAll, function(value, key) {
                            
            if($scope.data.data.codigo_data == $scope.datasAll[key].codigo_data){

                $scope.horarios.push({codigo_horario:$scope.datasAll[key].codigo_horario,horario:$scope.datasAll[key].horario});
            }
        });

    }

    $scope.efetuarBuscaAreaTema = function(){
        
        
        if($scope.data.area == null){
            $ionicPopup.alert({
                        title:"Aviso",
                        template:"Informe a área desejada."
                    });
            return false;
        }

        if($scope.data.tema == null){
            $ionicPopup.alert({
                        title:"Aviso",
                        template:"Informe o tema  desejado."
                    });
            return false;
        }

        if($scope.data.data == null){
            $scope.data.data=[];
            $scope.data.data.data="null";
        }

        if($scope.data.horario == null){
            $scope.data.horario=[];
            $scope.data.horario.horario="null";
        }
        

        if(typeof $scope.areaSelecionada != undefined){
            areaTitulo = $scope.areaSelecionada.titulo;
        }
        $state.go("app.artigosbyareatema",{autorId:0,
                                        area:$scope.data.area.descricao,
                                        tema:$scope.data.tema.descricao,
                                        data:$scope.data.data.data,
                                        horario:$scope.data.horario.horario});
    }    

	$scope.onTextChange = function(){
		if($scope.data.txtBusca.length >= 3){
			ArtigosService.getArtigoByTitulo($window.localStorage['token'],$scope.data.txtBusca).then(function(response){
				if(typeof response.data != "undefined"){
					 $scope.listaArtigos = response.data;
				}else{
					 $scope.listaArtigos = [];
				}
			})
		}else{
			$scope.listaArtigos = [];
		}
		
	}

    $scope.setAgendar = function(_artigoId){
        AgendaService.setAgendar($window.localStorage['token'],_artigoId).then(function(response){
        console.log('set agendar buscarartigos js:' + response.data.retorno);
        if(response.data != "undefined" && response.data.codigo_artigo != ""){
           
            $ionicPopup.alert({
                        title:"Aviso",
                        template: "Agendamento efetuado com sucesso."
                    });
            
        }
        else{
          
            $ionicPopup.alert({
                        title:"Aviso",
                        template:"Não foi possível registrar o artigo."
                    });
        }
        });
	}

})

