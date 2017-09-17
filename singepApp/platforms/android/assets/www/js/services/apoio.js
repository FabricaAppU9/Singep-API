app.factory('ApoioService', ['$http', function ($http) {
	var urlBase = 'http://singep.esy.es/api/';
	var ApoioService = {};

	ApoioService.area = [];
	ApoioService.tema = [];
    ApoioService.area_tema = [];
    ApoioService.data = [];
	ApoioService.data.getDataHorario = function(_token){
			var req = {
			method: 'POST',
			url: urlBase+'data/getDataHorario',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token}

	}

	
	return $http(req)
		.then(function(response){
			
			return response;
		}, function(error){
			
			return error.err;
		});
	}

	ApoioService.ApoioService = function(_token,_codigo_tema){
		var req = {
			method: 'POST',
			url: urlBase+'tema/getCodigo',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,codigo_tema:_codigo_tema}
	}
	
	return $http(req)
		.then(function(response){	
			return response;
		}, function(error){
			return error.err;
		});
	};

    ApoioService.tema.getAll = function (_token) {
    var req = {
			method: 'POST',
			url: urlBase+'tema/getAll',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token}
	}
	
	return $http(req)
		.then(function(response){
			return response;
		}, function(error){
			return error.err;
		});
    };

    ApoioService.area.getCodigo = function(_token,_codigo_area){
    	var req = {
			method: 'POST',
			url: urlBase+'area/getCodigo',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token,codigo_area:_codigo_area}
	}
	
	return $http(req)
		.then(function(response){
			
			return response;
		}, function(error){
			
			return error.err;
		});	
    }


    ApoioService.tema.getAreaTemas = function(_token){
    	var req = {
			method: 'POST',
			url: urlBase+'area_tema/getAreaTemas',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token}
	}
	
	return $http(req)
		.then(function(response){
			
			return response;
		}, function(error){
			
			return error.err;
		});	
    }

    ApoioService.area.getAll = function(_token){
    	var req = {
			method: 'POST',
			url: urlBase+'area/getAll',
			headers: {'Content-Type': 'application/json'},
			data: {token:_token}
	}
	
	return $http(req)
		.then(function(response){
			
			return response;
		}, function(error){
			
			return error.err;
		});	
    }
    return ApoioService;

}]);