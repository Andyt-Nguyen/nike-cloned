NikeApp.controller('MensProdController',['$scope','NikeService','$stateParams', function($scope, NikeService, $stateParams){

/////////////////
//NikeMensShoes//
////////////////


//Add TO Cart
$scope.add = "Add To Cart"
$scope.addToCart = (item) => {
	$scope.add = "Added"
	$scope.addon = true;
	NikeService.addToCart.push(item);
}





// $scope.buyProduct = function(product = $scope.product_id){
// 	NikeService.buyProduct(product).then(function(response){
// 		return response;
// 	});
// };
//
// $scope.getCart = (user_id = $scope.user) => {
// 	$scope.subtotal = 0;
// 	NikeService.getCart(user_id).then((response) => {
// 		$scope.userCart = response;
// 		response.map(v=>{
// 			v.total = v.quantity * v.product_price
// 			$scope.subtotal += v.total;
// 			return v;
// 		})
// 	})
// }

//All Shoes
	$scope.getNikeMAShoes = function(){
		let promise = NikeService.getNikeMAShoes();
		return promise.then((result) =>{
			$scope.NikeMAShoes = result;
			$scope.singleItem = $scope.NikeMAShoes.filter(function(data){
				return data.product_id === parseInt($stateParams.id);
			});
		});
	};
	$scope.getNikeMAShoes()

//LifeStyle
	$scope.getNikeMLSShoes = function(){
		let promise = NikeService.getNikeMLSShoes();
		return promise.then((result) =>{
			$scope.LSShoes = result;
			console.log($scope.LSShoes);
		})
	}();



//Running
	$scope.getNikeMRnShoes = function(){
		let promise = NikeService.getNikeMRnShoes();
		return promise.then((result) =>{
			$scope.RnShoes = result;
		})
	}();

//Basketball
	$scope.getNikeMBShoes = function(){
		let promise = NikeService.getNikeMBShoes();
		return promise.then((result) =>{
			$scope.BShoes = result;
		})
	}();

//Soccer
	$scope.getNikeMSShoes = function(){
		let promise = NikeService.getNikeMSShoes();
		return promise.then((result) =>{
			$scope.SShoes = result;
		})
	}();

	//Traning And Gym
	$scope.getNikeMGTShoes = function(){
		let promise = NikeService.getNikeMTGShoes();
		return promise.then((result) =>{
			$scope.GTShoes = result;
		})
	}()


	let combo = (a,b) => {
		for(let i = 0; i < a.length; i++){
			a[i].img = b[i].img
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
