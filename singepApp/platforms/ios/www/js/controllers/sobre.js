

app.controller('SobreCtrl', function($scope,$state,SobreService,$window,$ionicPopup){
    
    $scope.conteudosobre = [];
    
    SobreService.getAll($window.localStorage['token']).then(function(response){
       
        $scope.conteudosobre = response.data[0].conteudo;
         console.log(JSON.stringify($scope.conteudosobre,null,4));
        if($scope.conteudosobre == "null"){
                //$state.go('app.home');    
                $ionicPopup.alert({
                        title:"Aviso",
                        template:"Não foi possível carregar conteúdo."
                    });
            }
    });
});