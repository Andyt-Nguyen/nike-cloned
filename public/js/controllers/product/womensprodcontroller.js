NikeApp.controller('WomensProdController',['$scope','NikeService','$stateParams', function($scope,NikeService, $stateParams){


	$scope.add = "Add To Cart"
	$scope.addToCart = (item) => {
		$scope.add = "Added"
		$scope.addon = true;
		NikeService.addToCart.push(item);
	}



//All Shoes
	$scope.getAllNikeWShoes = function(){
		let promise = NikeService.getAllNikeWShoes();
		return promise.then((result) => {
			$scope.WShoes = result;
			$scope.singleItem = $scope.WShoes.filter(function(data){
				return data.product_id == $stateParams.id
			});
		});
	}();


//Lifestyle
	$scope.getNikeWLSShoes = function(){
		let promise = NikeService.getNikeWLSShoes();
		return promise.then((result) => {
			$scope.WLSShoes = result;
		});
	}();


//Running
	$scope.getNikeWRnShoes = function(){
		let promise = NikeService.getNikeWRnShoes();
		return promise.then((result) => {
			$scope.RnShoes = result;
		})
	}();


//Basketball
	$scope.getNikeWBShoes = function(){
		let promise = NikeService.getNikeWBShoes();
		return promise.then((result) => {
			$scope.BShoes = result;
		});
	}();


//Soccer
	$scope.getNikeWSShoes = function(){
		let promise = NikeService.getNikeWSShoes();
		return promise.then((result) => {
			$scope.SShoes = result;
		});
	}();


//Training And Gym
	$scope.getNikeWTGShoes = function(){
		let promise = NikeService.getNikeWTGShoes();
		return promise.then((result) => {
			$scope.TGShoes = result;
		});
	}();


	let combo = (a,b) =>{
		for(let i = 0; i < a.length; i++){
			a[i].img = b[i].img;
		}
	}

	function getUser() {
	    NikeService.getUser().then((user) => {
	      console.log('USER DATA',user);
	      if (user) $scope.currentUser = user;
	      else   $scope.currentUser = 'NOT LOGGED IN';
	    })
	  };

	getUser();


}]);
