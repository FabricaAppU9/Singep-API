app.factory('HomeService', ['$http', function ($http) {
	var urlBase = 'http://singep.esy.es/api/programacao/';
	var HomeService = {};

	HomeService.getPrimeiroDia= function(_token){
			var req = {
			method: 'POST',
			url: urlBase+'getPrimeiroDia',
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

		

	HomeService.getSegundoDia= function(_token){
			var req = {
			method: 'POST',
			url: urlBase+'getSegundoDia',
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

    return HomeService;

}]);