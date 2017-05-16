NikeApp.controller('NikeMenController',['$scope','NikeService', function($scope,NikeService){


	// Nike Front Page Mens Shoes
	$scope.nikeShoes = NikeService.nikeMenShoes;


	$scope.getShoes = function(){
		return NikeService.getAllShoes().then(function(response){
			$scope.nikeShoes = response;
		})
	}();


	//Nike+ Apps
	 $scope.nikePlus = NikeService.nikePlusApps;
	 	//console.log("Nike Plus ",$scope.nikePlus);

	 //Nike Social Media
	 $scope.nikeFollow = NikeService.nikeFollow;
	 	//console.log("Nike Follow", $scope.nikeFollow);




		function getUser() {
		    NikeService.getUser().then(function(user) {
		      console.log('USER DATA',user);
		      if (user) $scope.currentUser = user;
		      else   $scope.currentUser = 'NOT LOGGED IN';
		    })
		  };
			getUser();

}]);
