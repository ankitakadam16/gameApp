var app=angular.module('myApp',[])
app.controller('myAppController',['$scope','$timeout',function($scope,$timeout){
	var words = ['cat','rat','mat','that']
	$scope.correct= [];
	$scope.wrong = [];
	$scope.guess = 6;
	$scope.display='';
	$scope.input={
		letter:'',
	}
	var selectRandomWord = function(){
		var index = Math.round(Math.random()*words.length)
		return words[index]
	}
	var newGame = function(){
		$scope.correct= [];
		$scope.wrong = [];
		$scope.guess = 6;
		$scope.display='';
		var selected = selectRandomWord()
		var temdisplay="";
		for (var i = selected.length - 1; i >= 0; i--) {
			selected+="#"
		}
		$scope.display = temdisplay
		
	}
	$scope.letterChoose=function(){
		for (var i =0; i<$scope.correct.length; i++) {
			if($scope.correct[i].toLowerCase()==$scope.input.letter){
				$scope.input.letter = ""
				return;
			}
		}

		for (var i =0; i<$scope.wrong.length; i++) {
				if($scope.wrong[i].toLowerCase()==$scope.input.letter){
					$scope.input.letter = ""
					return;
				}
			}
		var correctFlag = false
		for (var i =0; i<selected.length; i++)  {
			if(selected[i].toLowerCae==$scope.input.letter){
				$scope.display = $scope.display.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.display[i]+1
				correctFlag = true;

			}
		}

		if(correctFlag){
			$scope.correct.push($scope.input.letter.toLowerCase())			
		}
		else{
			$scope.guess--;
			$scope.wrong.push($scope.input.letter.toLowerCase())
		}
		$scope.input.letter =""
		if($scope.guess==0){
			alert("you lost")
			$timeout(function() {
				newGame()
			}, 500);
		}
		if($scope.display.indexOf("#")===-1){
			alert("you won")
			$timeout(function() {
				newGame()
			}, 500);

		}


	}
	newGame()
}]);
