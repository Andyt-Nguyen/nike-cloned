NikeApp.controller('NikeBoysController', ['$scope', 'NikeService', function($scope, NikeService){


	// Nike Shoes
	$scope.nikeShoes = NikeService.bNikeShoes;
		//console.log('Nike Shoes', $scope.nikeShoes);

	// Nike Clothes
	$scope.nikeClothes = NikeService.bNikeClothes;
		//console.log('Nike Clothes', $scope.nikeClothes);

	// Nike Checklist
	$scope.nikeCheckList = NikeService.bNikeCheckList;
		//console.log('Nike Checklist', $scope.nikeCheckList);

	//Nike Best Of
	$scope.bestNike = NikeService.bestOfNike;
		//console.log($scope.bestNike);


		function getUser() {
		    NikeService.getUser().then(function(user) {
		      console.log('USER DATA',user);
		      if (user) $scope.currentUser = user;
		      else   $scope.currentUser = 'NOT LOGGED IN';
		    })
		  };
		getUser();

}]);
