NikeApp.controller('BoysProductController', ['$scope', 'NikeService', '$stateParams',function($scope, NikeService,$stateParams){
	$scope.NikeBProds = NikeService.bProdCategShoes;
	$scope.add = "Add To Cart"
	$scope.addToCart = (item) => {
		$scope.add = "Added"
		$scope.addon = true;
		NikeService.addToCart.push(item);
	};

//AllShoes
	$scope.getABShoes = function(){
		let promise = NikeService.getABShoes();
		return promise.then((result) => {
			$scope.ABShoes = result;
			$scope.singleItem = $scope.ABShoes.filter((data) =>{
				return data.product_id == $stateParams.id
			});
		});
	}();


//LifeStyle
	$scope.getNikeBLSShoes = function(){
		let promise = NikeService.getNikeBLSShoes();
		return promise.then((result) =>{
			$scope.LSShoes = result;
		});
	}();


//Running
	$scope.getNikeRnShoes = function(){
		let promise = NikeService.getNikeBRnShoes();
		return promise.then((result) =>{
			$scope.RnShoes = result;
		});
	}();


//Basketball
	$scope.getNikeBBShoes = function(){
		let promise = NikeService.getNikeBBShoes();
		return promise.then(function(results){
			$scope.BShoes = results
		});
	}();

//Soccer
	$scope.getNikeBSShoes = function(){
		let promise = NikeService.getNikeBSShoes();
		return promise.then((result) =>{
			$scope.SShoes = result;
		});
	}()

//Training
	$scope.getNikeBTGShoes = function(){
		let promise = NikeService.getNikeBTGShoes();
		return promise.then((result) =>{
			$scope.TGShoes = result;
		});
	}()

	// let combo = function(a,b){
	// 	for(let i = 0; i < a.length; i++){
	// 		a[i].img = b[i].img
	// 	}
	// };

	//Store Users/Password
	function getUser() {
	    NikeService.getUser().then((user) => {
	      console.log('USER DATA',user);
	      if (user) $scope.currentUser = user;
	      else   $scope.currentUser = 'NOT LOGGED IN';
	    })
	  };
	getUser();

}]);
