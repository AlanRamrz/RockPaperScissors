app.controller('mainController',function($scope){

  $scope.you = 0;
  $scope.computer = 0;

  $scope.play = function(youSelect){
    var computerSelect = computerSelection();
    var result = processGame[youSelect][computerSelect];

    alert("" + youSelect + " -> " + computerSelect + " -> " + result);
  }

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

  var processGame = {
    "Rock" : {
      "Rock" : 0,
      "Paper" : -1,
      "Scissors" : 1
    },
    "Paper" : {
      "Rock" : 1,
      "Paper" : 0,
      "Scissors" : -1
    },
    "Scissors" : {
      "Rock" : -1,
      "Paper" : 1,
      "Scissors" : 0
    }
  };

});
