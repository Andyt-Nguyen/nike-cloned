NikeApp.controller('SuccessController', function($scope){
	function getUser() {
			NikeService.getUser().then(function(user) {
				console.log('USER DATA',user);
				if (user) $scope.currentUser = user;
				else   $scope.currentUser = 'NOT LOGGED IN';
			})
		};

		getUser();

});
