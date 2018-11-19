var app=angular.module('myApp',[])
app.controller('myAppController',['$scope',function($scope){
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
		console.log(selected,'@@@@@')

	}
	newGame()
}])