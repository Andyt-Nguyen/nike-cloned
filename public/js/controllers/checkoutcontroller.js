NikeApp.controller('CheckOutController', function($scope,$state,NikeService){
	$scope.items = NikeService.addToCart;

	$scope.total = $scope.items.reduce(function(sum,order){
		return sum + order.price
	},0);
	console.log($scope.total);

	$scope.remove = function(item){
		var y = $scope.items.indexOf(item);
		$scope.items.splice(y, 1);

		$state.reload();
	};

$scope.addToHistory = function () {
	NikeService.addToHistory($scope.currentUser.user_id);
}


function getUser() {
		NikeService.getUser().then(function(user) {
			console.log('USER DATA',user);
			if (user) $scope.currentUser = user;
			else   $scope.currentUser = 'NOT LOGGED IN';
		})
	};

	getUser();

});
