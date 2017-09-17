var app = angular.module('singep.controller', []);
	

app.controller('HomeCtrl', function($scope,$state,$window,$cordovaBarcodeScanner,$location,LoginService,$ionicPopup,SessaoService,NotificacoesService,HomeService){

$scope.agendaDia1 = [];

$scope.titulo="Home";

	$scope.nome = $window.localStorage['nome'];
	$scope.token = $window.localStorage['token'];

    HomeService.getPrimeiroDia($scope.token).then(function(response){
    
                if(typeof response.data != "undefined"){

                    $scope.agendaDia1 = response.data;
               
                   
                    
                }else{
                    $ionicPopup.alert({
                        title:"Aviso",
                        template:"Não foi possível atualizar agenda do evento."
                    });
                }
            });

           
          HomeService.getSegundoDia($scope.token).then(function(response){
                
             

                if(typeof response.data != "undefined"){

                    $scope.agendaDia2 = response.data;
               
                   
                    console.log(JSON.stringify($scope.agendaDia2,null,4));
                }else{
                    $ionicPopup.alert({
                        title:"Aviso",
                        template:"Não foi possível atualizar agenda do evento."
                    });
                }
            });  




    
    
    
    
	
	$scope.qrCodeScan = function() {

        $cordovaBarcodeScanner.scan().then(function(imageData) {
                       
            SessaoService.setSessao($scope.token,imageData.text).then(function(response){
            	
             

                if(typeof response.data != "undefined" && response.data.retorno != "null"){
                    
                    $ionicPopup.alert({
                        title:"Aviso",
                        template:"Presença registrada com sucesso."
                    });
            	}else{
            		$ionicPopup.alert({
	    				title:"Aviso",
	    				template:"Não foi possível registrar presença nesta sessão."
    				});
            	}
            });

           
        }, function(error) {
            $ionicPopup.alert({
                        title:"Aviso",
                        template:"Não foi possível registrar presença nesta sessão."
            });
        });
    };

    $scope.deslogar = function(){
    	
    	LoginService.deslogar($scope.token).then(function(response){
    		if(typeof response.data.retorno != "undefined"){
                NotificacoesService.cancelarVerificacao($scope.token,$window);
                $window.localStorage['notification'] = 'false';
                $window.localStorage['qtdNotifications'] = 0;
    			$window.localStorage.clear();
    			$window.location.reload(true);
    		}else{
    			$ionicPopup.alert({
    				title:"Aviso",
    				template:"Não foi possível deslogar"
    			});
    		}
    	});  	
    }
})