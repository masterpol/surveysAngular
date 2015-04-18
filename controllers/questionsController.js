Home.controller("questionsController", function($scope, questionsModel){

     $scope.questions = questionsModel.setSurveyCommonAsk();
});
