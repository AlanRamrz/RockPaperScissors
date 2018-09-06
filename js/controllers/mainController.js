app.controller('mainController',function($scope){

  $scope.you = 0;
  $scope.computer = 0;
  $scope.computerSelect = '';
  $scope.youSelect = '';

  $scope.play = function(yourSelection){

    $scope.youSelect = yourSelection;
    $scope.computerSelect = getComputerSelection();
    var result = processGame[$scope.youSelect][$scope.computerSelect];

    //alert("Computer choose: " + $scope.computerSelect);

    switch(result) {
    case -1:
        $scope.computer += 1;
        break;
    case 1:
        $scope.you += 1;
        break;
    default:
    }

  };

  var getComputerSelection = function(){

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
