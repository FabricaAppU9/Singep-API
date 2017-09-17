app.factory('LoginService', ['$http', function ($http) {
	var urlBase = 'http://singep.esy.es/api/api/';
	var LoginService = {};
    LoginService.efetuarLogin = function (loginData,$scope) {
    var docFormat = "";
    //console.log('tamanho cpf'+loginData.cpf.toString().length);
    docFormat = loginData.cpf.toString();
    for (var i = loginData.cpf.toString().length; i < 11; i++) {
    	docFormat = '0'+docFormat.toString();
    }
   
    //console.log('Novo valor '+docFormat);
    var req = {
			method: 'POST',
			url: urlBase+'getLogin',
			headers: {'Content-Type': 'application/json'},
			data: {login: 'true',email:loginData.email,documento:docFormat}
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

    //-------------------

    LoginService.deslogar = function(_token) {
    var req = {
			method: 'POST',
			url: urlBase+'getLogout',
			headers: {'Content-Type': 'application/json'},
			data: {login: 'false',token: _token}
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

    return LoginService;
}]);