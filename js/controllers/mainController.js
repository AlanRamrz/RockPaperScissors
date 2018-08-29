app.controller('mainController',function($scope){

  $scope.startGame = function(){
    alert(computerSelection());
  };

  var computerSelection = function(){
    var number = Math.floor(Math.random() * 3) + 1;

    switch(number) {
    case 1:
        return "Rock";
        break;
    case 2:
        return "Paper";
        break;
    default:
        return "Scissors";
    }
    
  };

});
