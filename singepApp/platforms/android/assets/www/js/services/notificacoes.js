app.factory('NotificacoesService', ['$http','$cordovaLocalNotification', function ($http,$cordovaLocalNotification,$window) {
	var urlBase = 'http://singep.esy.es/api/notificacao/';
	var NotificacoesService = {};

	NotificacoesService.agendarVerificacao = function(_token,window){
		
		
        		setTimeout(function () {
		            
		            window.localStorage['timerId'] = setInterval(function () {
		            	if(window.localStorage['notification']='true'){
		            			
							var req = {
								method: 'POST',
								url: urlBase+'getAll',
								headers: {'Content-Type': 'application/json'},
								data: {token:window.localStorage['token']}
							}
							
							return $http(req)
									.then(function(response){
										
										if(response.data.length != window.localStorage['qtdNotification']){
											window.localStorage['qtdNotification'] = response.data.length;
											var now = new Date().getTime();
				      						var tempo = new Date(now + 5 * 1000);
									        $cordovaLocalNotification.schedule({
										        id: response.data.length,
										        title: response.data[0].titulo,
										        text: response.data[0].texto,
										        icon: 'icon',
										        at: tempo
										      }).then(function (result) {
										        if(typeof response.data[0].url != "undefined" && 
										                  response.data[0].url != "null" && 
										                  response.data[0].url != "" ){// ...

										        			window.open(response.data[0].url);

										        }else{
										        	$state.go('app.notificacoes');
										        }
										      });
									  		
									  	}
									
							return response;
							}, function(error){
								
								$window.localStorage['qtdNotification'] = 0;
								return error.err;
							});
						}
					},3600000);
		        }, 5000);
        	}
    

	NotificacoesService.cancelarVerificacao = function(_token){
		//console.log("Notificação foi cancelada");
		
	}

	NotificacoesService.getNovas = function(_token){
			var req = {
			method: 'POST',
			url: urlBase+'getAll',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token}

	}

	
	return $http(req)
		.then(function(response){
			//console.log(JSON.stringify(response,null,4));
			return response;
		}, function(error){
			//console.log("Retorno negativo do servico"+error.err)
			return error.err;
		});
	}


	NotificacoesService.getAll = function(_token){

			var req = {
			method: 'POST',
			url: urlBase+'getAll',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token}

	}

	//console.log("Passei por aqui");
	
	return $http(req)
		.then(function(response){
			console.log(JSON.stringify(response,null,4));
			return response;
		}, function(error){
			//console.log("Retorno negativo do servico"+error.err)
			return error.err;
		});
	}

	NotificacoesService.setLida = function(_token,_codigo_notificacao,_codigo_participante){
		var req = {
			method: 'POST',
			url: urlBase+'setLida',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,codigo_notificacao:_codigo_notificacao,codigo_participante:_codigo_participante}
	}
	
	return $http(req)
		.then(function(response){
			//console.log(JSON.stringify(response,null,4));
			return response;
		}, function(error){
			//console.log("Retorno negativo do servico"+error.err)
			return error.err;
		});
	};

    


   NotificacoesService.setEnviar = function(_token,_texto,_url,_tipo){
		var req = {
			method: 'PUT',
			url: urlBase+'setEnviar',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,texto:_texto,url:_url,tipo:_tipo}
	}
	
	return $http(req)
		.then(function(response){
			//console.log(JSON.stringify(response,null,4));
			return response;
		}, function(error){
			//console.log("Retorno negativo do servico"+error.err)
			return error.err;
		});
	};


	NotificacoesService.getNovas = function(_token){
			var req = {
			method: 'POST',
			url: urlBase+'getNovas',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token}

	}

	
	return $http(req)
		.then(function(response){
			//console.log(JSON.stringify(response,null,4));
			return response;
		}, function(error){
			//console.log("Retorno negativo do servico"+error.err)
			return error.err;
		});
	}

    return NotificacoesService;

}]);