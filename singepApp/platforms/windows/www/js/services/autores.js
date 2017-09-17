app.factory('AutoresService', ['$http', function ($http) {
	var urlBase = 'http://singep.esy.es/api/';
	var AutoresService = {};
    AutoresService.buscarTodos = function (_token) {
    var req = {
			method: 'POST',
			url: urlBase+'autor/getAll',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token}
	}
	
	return $http(req)
		.then(function(response){
			console.log(JSON.stringify(response,null,4));
			return response;
		}, function(error){
			

			return error.err;

			  


		});
       
    };


    AutoresService.getAutorByNome = function(_token,_nome){
    	var req = {
			method: 'POST',
			url: urlBase+'autor/getNome',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,nome:_nome}
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

    return AutoresService;

}]);