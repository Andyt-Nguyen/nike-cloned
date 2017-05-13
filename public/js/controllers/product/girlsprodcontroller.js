NikeApp.controller('GirlsProdController', ['$scope', 'NikeService','$stateParams', function($scope, NikeService, $stateParams){


	$scope.add = "Add To Cart"
	$scope.addToCart = function(item){
		$scope.add = "Added"
		$scope.addon = true;
		console.log(item);
		NikeService.addToCart.push(item);
		console.log(NikeService.addToCart);
	}

//Intro To the Nike Girl Products Page
	$scope.gProdShoes = NikeService.gprodCategShoes;

//Calling To The Data base


//All Nike Shoes
	$scope.getGAShoes = function(){
		var promise = NikeService.getNikeGAShoes();
		return promise.then(function(response){
			console.log('RESPONSE GIRLS', response);
			$scope.GAShoes = response;
			console.log($scope.GAShoes);
			$scope.singleItem = $scope.GAShoes.filter(function(data){
				return data.product_id == $stateParams.id
			});
		});
	}();



//LifeStyle
	$scope.getNikeLsShoes = function(){
		var promise = NikeService.getNikeGLS();
		return promise.then(function(result){
			$scope.LSShoes = result;
		})
	}();

//Running
	$scope.getNikeRnShoes = function(){
		var promise = NikeService.getNikeGRnShoes();
		return promise.then(function(result){
			$scope.RnShoes = result;
		})
	}();

//Basketball
	$scope.getGBShoes = function(){
		var promise = NikeService.getNikeGBShoes();
		return promise.then(function(result){
			$scope.GBShoes = result;
		});
	}();

//Soccer
	$scope.getGSShoes = function(){
		var promise = NikeService.getNikeGSShoes();
		return promise.then(function(result){
			$scope.GSShoes = result;
		});
	}();

//Jordan
	$scope.getGJShoes = function(){
		var promise = NikeService.getNikeJShoes();
		return promise.then(function(result){
			$scope.GJShoes = result;
		});
	}();


	var combo = function(a,b){
		for(var i = 0; i < a.length; i++){
			a[i].img = b[i].img
		}
	}

	function getUser() {
	    NikeService.getUser().then(function(user) {
	      console.log('USER DATA',user);
	      if (user) $scope.currentUser = user;
	      else   $scope.currentUser = 'NOT LOGGED IN';
	    })
	  };
	getUser();


}]);
