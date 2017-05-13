NikeApp.controller('NikeCustomizeController',['$scope','NikeService', function($scope, NikeService){

	$scope.nikeShoes = NikeService.cNikeShoes;
	//console.log($scope.nikeShoes);

	$scope.nikeSuede = NikeService.cNikeSuede;

	function getUser() {
	    NikeService.getUser().then(function(user) {
	      console.log('USER DATA',user);
	      if (user) $scope.currentUser = user;
	      else   $scope.currentUser = 'NOT LOGGED IN';
	    })
	  }

	getUser();


}]);
