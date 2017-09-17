app.factory('SessaoService', ['$http', function ($http) {
	var urlBase = 'http://singep.esy.es/api/sessao/';
	var SessaoService = {};


	SessaoService.setSessao = function(_token,_sala){
			var req = {
			method: 'PUT',
			url: urlBase+'setSessao',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,sala:_sala}

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

	SessaoService.getCodigo = function(_token,_codigo_participante){
		var req = {
			method: 'POST',
			url: urlBase+'getTitulo',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,codigo_participante:_codigo_participante}
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

    SessaoService.getAll = function (_token) {
    var req = {
			method: 'POST',
			url: urlBase+'getArtigos',
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
    };


    return SessaoService;

}]);