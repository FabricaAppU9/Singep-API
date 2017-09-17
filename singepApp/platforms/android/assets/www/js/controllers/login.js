app.controller('LoginCtrl', function($scope,$state,$ionicLoading,LoginService,$ionicPopup,$window,NotificacoesService){
	$scope.loginData = [];
	var mensagem="";
	
	$scope.efetuarLogin=function(form){
		
		  if(!form.email.$valid){
			  mensagem="Informe um e-mail válido utilizado no momento do cadastro.";
		  }else if(form.cpf.length<11){
			  mensagem="Informe um CPF válido utilizado no momento do cadastro.";
		  }else{
			  mensagem="";
			  $ionicLoading.show();
			  LoginService.efetuarLogin($scope.loginData).then(function(response){
				 $ionicLoading.hide(); 
				
				 if(typeof response == "undefined") {
					mensagem="Erro no login."
					$ionicPopup.alert({
						 title: 'Aviso',
						 template: mensagem
					});
					$window.localStorage['token'] = "";
					$window.localStorage['codigo_participante'] = "";
					$window.localStorage['nome'] = "";
					$window.localStorage['loginData'] = "";
				}else if(typeof response.data.token != "undefined" && response.data.token.length > 5){
					
					$window.localStorage['token'] = response.data.token;
					$window.localStorage['codigo_participante'] = response.data.codigo_participante;
					$window.localStorage['nome'] = response.data.nome;
					$window.localStorage['loginData'] = $scope.loginData;
					
					NotificacoesService.agendarVerificacao($scope.token,$window);




					$window.localStorage['notification'] = 'true';
					
					$state.go("app.home");
				}else{
					mensagem="Não foi possível efetuar login."
					
					$ionicPopup.alert({
						 title: 'Aviso',
						 template: mensagem
					});
					$window.localStorage['token'] = "";
					$window.localStorage['codigo_participante'] = "";
					$window.localStorage['nome'] = "";
					$window.localStorage['loginData'] = "";
				}
			  });
		  }
		
		if(mensagem!=""){
			$ionicPopup.alert({
			 title: 'Aviso',
			 template: mensagem
			});
		}
		  
		  
		  
		  
		
	}
	
});