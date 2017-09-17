app.factory('ArtigosService', ['$http', function ($http) {
	var urlBase = 'http://singep.esy.es/api/artigo/';
	var ArtigosService = {};


	ArtigosService.getArtigosByAreaTema = function(_token,_area,_tema,_data,_horario){
			var req = {
			method: 'POST',
			url: urlBase+'getAreaTema',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,area:_area,tema:_tema,data:_data,horario:_horario}

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

	ArtigosService.getArtigoByTitulo = function(_token,_artigoTitulo){
		var req = {
			method: 'POST',
			url: urlBase+'getTitulo',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,titulo:_artigoTitulo}
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

    ArtigosService.getArtigosByAutor = function (_token,_autorId) {
    var req = {
			method: 'POST',
			url: urlBase+'getArtigos',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,codigo_autor:_autorId}
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

    ArtigosService.getDetalheArtigo = function(_token,_artigoId){
    	var req = {
			method: 'POST',
			url: urlBase+'getArtigoDetalhe',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,codigo_artigo:_artigoId}
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



    return ArtigosService;

}]);