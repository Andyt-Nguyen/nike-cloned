NikeApp.controller('LoginController', ['$scope','NikeService', function($scope,NikeService){
	function getUser() {
			NikeService.getUser().then(function(user) {
				console.log('USER DATA',user);
				if (user) $scope.currentUser = 'Welcome '+ user.email;
				else   $scope.currentUser = 'Log Into Nike+';
			})
		};
		getUser();
}])
