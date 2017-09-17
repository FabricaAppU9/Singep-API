app.factory('AgendaService', ['$http', function ($http) {
	var urlBase = 'http://singep.esy.es/api/agenda/';
	var AgendaService = {};

	AgendaService.getAll= function(_token){
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

		AgendaService.setAgendar= function(_token,_idArtigo){
			var req = {
			method: 'PUT',
			url: urlBase+'setAgendar',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,codigo_artigo:_idArtigo}

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

	AgendaService.setRemover= function(_token,_idArtigo){
			var req = {
			method: 'DELETE',
			url: urlBase+'setRemover',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,codigo_artigo:_idArtigo}

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

    return AgendaService;

}]);