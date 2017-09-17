app.factory('PalestrantesService', ['$http', function ($http) {
	var urlBase = 'http://singep.esy.es/api/palestrante/';
	var PalestrantesService = {};


	PalestrantesService.getAll = function(_token){
			var req = {
			method: 'POST',
			url: urlBase+'getAll',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token}

			}

	
	return $http(req)
		.then(function(response){
			console.log(JSON.stringify(response,null,4));
			return response;
		}, function(error){
			console.log("Retorno negativo do servico"+error.err)
			return error.err;
		});
	}


	PalestrantesService.getDetalhePalestrante = function(_token,_codigo_palestrante){
			var req = {
			method: 'POST',
			url: urlBase+'getCodigo',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,codigo_palestrante:_codigo_palestrante}

			}

	
	return $http(req)
		.then(function(response){
			console.log(JSON.stringify(response,null,4));
			return response;
		}, function(error){
			console.log("Retorno negativo do servico"+error.err)
			return error.err;
		});
	}



	return PalestrantesService;
}]);