var tttApp = angular.module('tttApp', []);

tttApp.controller('TttController', function($scope){
	
	$scope.mark = function(){
		console.log($scope.grid[0][1].cellState);
		this.cell.cellState = "x";
		if($scope.grid[0][0].cellState == "x" && $scope.grid[0][1].cellState  == "x" && $scope.grid[0][2].cellState  == "x")
			alert("x wins");
	};

	$scope.grid = [
		[{
			cellState: " ",
			location: 0
			
		},
		{
			cellState: " ",
			location: 1
			
		},
		{
			cellState: " ",
			location: 2
			
		}],
		[{
			cellState: " ",
			location: 3
			
		},
		{
			cellState: " ",
			location: 4
			
		},
		{
			cellState: " ",
			location: 5
			
		}],
		[{
			cellState: " ",
			location: 6
			
		},
		{
			cellState: " ",
			location: 7
			
		},
		{
			cellState: " "
			
		},
		]];	

	$scope.winConditions = [
		{
			winRow: [["A1","A2","A3"],["B1","B2","B3"],["C1","C2","C3"]],
			winCol: [["A1","B1","C1"],["A2","B2","C2"],["A3","B3","C3"]],
			winDia: [["A1","B2","C3"],["A3","B2","C1"]],
		}];	

	$scope.plyr1 = {
		plyrTurn: false,
		plyrMark: 3,
		stack: $scope.stack

	};
	
	$scope.plyr2 = {
		plyrTurn: false,
		plyrMark: 5,
		stack: $scope.stack
	};

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

});	// end of my controller

	

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