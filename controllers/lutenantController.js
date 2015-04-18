//controlador llamado notasController al que inyectamos el modelo notasModel
Home.controller("lutenantController", function($scope, lutenantModel){
 
    //obtenemos todas las notas
    $scope.menu = lutenantModel.getMenu();
 
})