NikeApp.controller('BoysProductController', ['$scope', 'NikeService', '$stateParams',function($scope, NikeService,$stateParams){
	$scope.NikeBProds = NikeService.bProdCategShoes;
	$scope.add = "Add To Cart"
	$scope.addToCart = function(item){
		$scope.add = "Added"
		$scope.addon = true;
		console.log(item);
		NikeService.addToCart.push(item);
		console.log(NikeService.addToCart);
	}

//AllShoes
	$scope.getABShoes = function(){
		var promise = NikeService.getABShoes();
		return promise.then(function(result){
			$scope.ABShoes = result;
			$scope.singleItem = $scope.ABShoes.filter(function(data){
				return data.product_id == $stateParams.id
			});
		});
	}();


//LifeStyle
	$scope.getNikeBLSShoes = function(){
		var promise = NikeService.getNikeBLSShoes();
		return promise.then(function(result){
			$scope.LSShoes = result;
		});
	}();


//Running
	$scope.getNikeRnShoes = function(){
		var promise = NikeService.getNikeBRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
		});
	}();


//Basketball
	$scope.getNikeBBShoes = function(){
		var promise = NikeService.getNikeBBShoes();
		return promise.then(function(results){
			$scope.BShoes = results
		});
	}();

//Soccer
	$scope.getNikeBSShoes = function(){
		var promise = NikeService.getNikeBSShoes();
		return promise.then(function(result){
			$scope.SShoes = result;
		});
	}()

//Training
	$scope.getNikeBTGShoes = function(){
		var promise = NikeService.getNikeBTGShoes();
		return promise.then(function(result){
			$scope.TGShoes = result;
		});
	}()

	// var combo = function(a,b){
	// 	for(var i = 0; i < a.length; i++){
	// 		a[i].img = b[i].img
	// 	}
	// };

	//Store Users/Password
	function getUser() {
	    NikeService.getUser().then(function(user) {
	      console.log('USER DATA',user);
	      if (user) $scope.currentUser = user;
	      else   $scope.currentUser = 'NOT LOGGED IN';
	    })
	  };
	getUser();

}]);
