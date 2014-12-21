var tttApp = angular.module('tttApp', []);

tttApp.controller('TttController', function($scope){
	//WORKING mark function
	// $scope.mark = function(){
	// 	console.log(this);
	// 	console.log($scope.grid[0][1].cellState.location);
	// 	this.cell.cellState = "x";
	// WORKING win logic
	// 	if($scope.grid[0][0].cellState == "x" && $scope.grid[0][1].cellState  == "x" && $scope.grid[0][2].cellState  == "x")
	// 		alert("x wins");
	// 	else if($scope.grid[1][0].cellState == "x" && $scope.grid[1][1].cellState  == "x" && $scope.grid[1][2].cellState  == "x")
	// 		alert("x wins");
	// 	else if($scope.grid[2][0].cellState == "x" && $scope.grid[2][1].cellState  == "x" && $scope.grid[2][2].cellState  == "x")
	// 		alert("x wins");
	// 	else if($scope.grid[0][0].cellState == "x" && $scope.grid[1][1].cellState  == "x" && $scope.grid[2][2].cellState  == "x")
	// 		alert("x wins");
	// 	else if($scope.grid[2][0].cellState == "x" && $scope.grid[1][1].cellState  == "x" && $scope.grid[0][2].cellState  == "x")
	// 		alert("x wins");

	// };

	$scope.mark = function(cell){
		if(cell.cellState != " ") {
			alert("that space is already taken")
		}
		else {
			cell.cellState = $scope.currentPlyr();
	
				console.log($scope.plyr1.plyrTurn)
	
				if($scope.grid[0][0].cellState + $scope.grid[0][1].cellState  + $scope.grid[0][2].cellState  == 15)
					alert("player 1 wins");
				else if($scope.grid[1][0].cellState + $scope.grid[1][1].cellState + $scope.grid[1][2].cellState  == 15)
					alert("player 1 wins");
				else if($scope.grid[2][0].cellState + $scope.grid[2][1].cellState + $scope.grid[2][2].cellState  == 15)
					alert("player 1 wins");
				else if($scope.grid[0][0].cellState + $scope.grid[1][1].cellState + $scope.grid[2][2].cellState  == 15)
					alert("player 1 wins");
				else if($scope.grid[2][0].cellState + $scope.grid[1][1].cellState + $scope.grid[0][2].cellState  == 15)
				alert("player 1 wins")
		}
	};

	$scope.grid = [
		[{
			cellState: " ",
			location: 1
			
		},
		{
			cellState: " ",
			location: 2
			
		},
		{
			cellState: " ",
			location: 3
			
		}],
		[{
			cellState: " ",
			location: 4
			
		},
		{
			cellState: " ",
			location: 5
			
		},
		{
			cellState: " ",
			location: 6
			
		}],
		[{
			cellState: " ",
			location: 7
			
		},
		{
			cellState: " ",
			location: 8
			
		},
		{
			cellState: " ",
			location: 9
			
		},
		]];	


	console.log($scope.grid)

	$scope.winConditions = [
		{
			winRow: [["A1","A2","A3"],["B1","B2","B3"],["C1","C2","C3"]],
			winCol: [["A1","B1","C1"],["A2","B2","C2"],["A3","B3","C3"]],
			winDia: [["A1","B2","C3"],["A3","B2","C1"]],
		}];	

ç

	$scope.stack = [
		{
			stackName: 'frontend',
			stackImg: "../img/frontend.png",			
		},
		
		{
			stackName: 'backend',
			stackImg: "../img/frontend.png",
		},

		{
			stackName: 'database',
			stackImg: "../img/database.png",			
		},

		{
			stackName: 'bestpractice',
			stackImg: "../img/github.png",
		},
	]

	$scope.scoreboard = {
		games: [],
		rounds: []
	}

	$scope.currentPlyr = function(){
		var play = "";
		if($scope.plyr1.plyrTurn == true){
			play = $scope.plyr1.plyrMark;
			$scope.plyr1.plyrTurn = false;
			$scope.plyr2.plyrTurn = true;
		}
		else if($scope.plyr2.plyrTurn == true){
			play = $scope.plyr2.plyrMark;
			$scope.plyr1.plyrTurn = true;
			$scope.plyr2.plyrTurn = false;
		}
		return play;
	}

	$scope.game = function(){} //assigned to player that wins game : game winner determined by winConditions
	$scope.round = function(){} //assigned to player that wins the round : determined by player that wins the most games in a round: tiebreak goes to winner of RoChamBeau for the round.
	$scope.match = function(){} // assigned to player that wins the match: determined by player that wins the most rounds in a match

	


});	// end of my controller

// switch between players need to change variables//
// $scope.selectSquare = function() {
// 		console.log($scope.currentPlayer);
		
// 		player1 = "x";
// 		player2 = "o";

// 		if ($scope.currentPlayer == 'x' && player1 = "x") {
// 			this.cell.pick = "x";
// 			$scope.currentPlayer = 'o';
// 		} else {
// 			$scope.currentPlayer = 'o' && player2= "o";
// 			this.cell.pick = "o";
// 			$scope.currentPlayer = 'x';
// 			};
// 		return $scope.currentPlayer;
// 	};	

/*
tttApp.controller("TttController",['$scope', function($scope){
	$scope.text = "X";
	$scope.grid = [
		{
			marker: "X",
		}];	

		$scope.xmark = {
			image: "../img/x-mark.png";	
			}

	$scope.plyr1 = {
		mark: class = "three"; 
		image: "../img/x-mark.png";
	};

	$scope.plyr2 = {
		mark: class = "five"; 
		image: "../img/o-mark.png";
	};
*/



	// $scope.count = function(){
	// 	if (player = x){
	// 		if(count = 0){
	// 			count = count + 1;
	// 			return count;
	// 			}
	// 		}
	// 	if (player = y){
	// 		if(count = 0){
	// 			count = count = -1;
	// 			return count;
	// 			}
	// 		}
	// 	}

// $scope.mark = function(){
// 		console.log(this);
// 		//console.log($scope.grid[0][1].cellState.location); unnecessary console.log
// 		this.cell.cellState = 5;

