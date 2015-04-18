//controlador llamado notasController al que inyectamos el modelo notasModel
Home.controller("homeController", function($scope, homeModel){
    
    //get menues 
    $scope.menu = homeModel.getMenu();
})