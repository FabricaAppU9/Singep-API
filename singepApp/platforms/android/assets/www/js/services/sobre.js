app.factory('SobreService', ['$http', function ($http) {
	var urlBase = 'http://singep.esy.es/api/sobre/';
	var SobreService = {};

	SobreService.getAll= function(_token){
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

	
    return SobreService;

}]);