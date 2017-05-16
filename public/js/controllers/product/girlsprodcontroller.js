NikeApp.controller('GirlsProdController', ['$scope', 'NikeService','$stateParams', function($scope, NikeService, $stateParams){


	$scope.add = "Add To Cart"
	$scope.addToCart = (item) => {
		$scope.add = "Added"
		$scope.addon = true;
		NikeService.addToCart.push(item);
	}

//Intro To the Nike Girl Products Page
	$scope.gProdShoes = NikeService.gprodCategShoes;

//Calling To The Data base


//All Nike Shoes
	$scope.getGAShoes = function(){
		let promise = NikeService.getNikeGAShoes();
		return promise.then((response) =>{
			$scope.GAShoes = response;
			$scope.singleItem = $scope.GAShoes.filter((data) => {
				return data.product_id == $stateParams.id
			});
		});
	}();



//LifeStyle
	$scope.getNikeLsShoes = function(){
		let promise = NikeService.getNikeGLS();
		return promise.then((result) => {
			$scope.LSShoes = result;
		})
	}();

//Running
	$scope.getNikeRnShoes = function(){
		let promise = NikeService.getNikeGRnShoes();
		return promise.then((result) => {
			$scope.RnShoes = result;
		})
	}();

//Basketball
	$scope.getGBShoes = function(){
		let promise = NikeService.getNikeGBShoes();
		return promise.then((result) => {
			$scope.GBShoes = result;
		});
	}();

//Soccer
	$scope.getGSShoes = function(){
		let promise = NikeService.getNikeGSShoes();
		return promise.then((result) => {
			$scope.GSShoes = result;
		});
	}();

//Jordan
	$scope.getGJShoes = function(){
		let promise = NikeService.getNikeJShoes();
		return promise.then((result) => {
			$scope.GJShoes = result;
		});
	}();


	let combo = (a,b) => {
		for(let i = 0; i < a.length; i++){
			a[i].img = b[i].img
		}
	}

	function getUser() {
	    NikeService.getUser().then(function(user) {
	      if (user) $scope.currentUser = user;
	      else   $scope.currentUser = 'NOT LOGGED IN';
	    })
	  };
	getUser();


}]);
