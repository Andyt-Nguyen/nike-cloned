NikeApp.service('NikeService',['$http', function($http){

//////////////////
//Connection To DB//
//////////////////

//Cart

this.addToCart = [];
this.addToHistory = function(id){
	for (var i = 0; i < this.addToCart.length; i++) {
	var request = {
		user_id:id,
		product_id: this.addToCart[i].product_id
	}
	console.log(request);
	$http({
		method: 'POST',
		url:'/history',
		data:request
	})
	}
	this.addToCart=[];
}


	// this.buyProduct = function(id,product){
	// 	return $http({
	// 		method: 'POST',
	// 		url:'/shoppingcart',
	// 		data:{
	// 			id,
	// 			product
	// 		}
	// 	}).then(function(response){
	// 		return response;
	// 	});
	// };
	//
	//
	// this.getCart = (user) => {
	// 	console.log('get cart for ', user);
	// 	return $http({
	// 		method: 'POST',
	// 		url:'/getcart',
	// 		data: {
	// 			user
	// 		}
	// 	}).then(function(response){
	// 		return response.data;
	// 	});
	// };

//All Shoes
	this.getAllShoes = function(){
		return fpromise('GET','/getAllProds');
	};



////////////
//Nike Men//
////////////

	this.getNikeMAShoes = function(){
		return fpromise('GET', '/nikemshoes');
	};


//MLifeStyle
	this.getNikeMLSShoes = function(){
		return fpromise('GET','/nikemlsshoes');
	}



//MRunning
	this.getNikeMRnShoes = function(){
		return fpromise('GET', '/nikemrnshoes');
	}

//MBasketball
	this.getNikeMBShoes = function(){
		return fpromise('GET','/nikembshoes');
	};

//mSoccer
	this.getNikeMSShoes = function(){
		return fpromise('GET','/nikemsshoes');
	};

//MTraining And Gym
	this.getNikeMTGShoes = function(){
		return fpromise('GET','/niketgshoes');
	};




///////////////
//Nike Women//
/////////////
	this.getAllNikeWShoes = function(){
		return fpromise('GET','/nikewshoes');
	}

//wLifestyle
	this.getNikeWLSShoes = function(){
		return fpromise('GET','/nikewlsshoes');
	}

//wRunning
	this.getNikeWRnShoes = function(){
		return fpromise('GET','/nikewrnshoes');
	}

//wBasketball
	this.getNikeWBShoes = function(){
		return fpromise('GET','/nikewbshoes');
	}

//wSoccer
	this.getNikeWSShoes = function(){
		return fpromise('GET','/nikewsshoes');
	}

//wTraining
	this.getNikeWTGShoes = function(){
		return fpromise('GET','/nikewtgshoes');
	};



/////////////
//NikeBoys//
///////////
	this.getABShoes = function(){
		return fpromise('GET','/nikebshoes');
	};

//Lifestye
	this.getNikeBLSShoes = function(){
		return fpromise('GET','/nikeblsshoes');
	};

//Running
	this.getNikeBRnShoes = function(){
		return fpromise('GET', '/nikebrunning');
	};

//Basketball
	this.getNikeBBShoes = function(){
		return fpromise('GET', '/nikebbasketball');
	}

//Soccer
	this.getNikeBSShoes = function(){
		return fpromise('GET','/nikebsoccer');
	};

//Training
	this.getNikeBTGShoes = function(){
		return fpromise('GET', '/niketraining');
	}


//////////////
//Nike Girl//
////////////

//GAll Shoes
	this.getNikeGAShoes = function(){
		return fpromise('GET','/nikegshoes');
	};

//GLife Style
	this.getNikeGLS = function(){
		return fpromise('GET','/nikeglsshoes');
	};

//GRunning
	this.getNikeGRnShoes = function(){
		return fpromise('GET','/nikegrnshoes')
	};


//GBasketball
	this.getNikeGBShoes = function(){
		return fpromise('GET','/nikegbshoes');
	};

//GSoccer
	this.getNikeGSShoes = function(){
		return fpromise('GET','/nikegsshoes');
	};

//GJordan
	this.getNikeJShoes = function(){
		return fpromise('GET','/nikegjshoes')
	};


//Men Section
//Nike Men Shoes
	this.nikeMenShoes =[
	{name:'Running', img:'css/images/nikempng/running.png'},
	{name:'Basketball', img:'css/images/nikempng/basketball.png'},
	{name:'Football', img:'css/images/nikempng/football.png'},
	{name:'traning & gym', img:'css/images/nikempng/training.png'},
	{name: 'sportswear', img:'css/images/nikempng/sportwear.png'},
	{name:'jordan', img:'css/images/nikempng/jordan.png'}
];

//Men Nike + Apps
 	this.nikePlusApps =[
		{name: "Nike+App", desc: "All You Need To Be Your Best", img:"css/images/nikempng/nikeplus.png"},
		{name: "Nike+Run Club", desc:"Your perfect running partner", img:"css/images/nikempng/nikenrc.png"},
		{name: "Nike+Training Club", desc: "Your ultimate personal trainer", img:"css/images/nikempng/nikentc.png"},
		{name: "Nike+Snkrs", desc:"Your ultimate sneaker destination", img:"css/images/nikempng/nikesnkers.png"}
	];

//Men Nike Social Media
	this.nikeFollow =[
		{img:"css/images/nikempng/twitter.png"},
		{img:"css/images/nikempng/facebook.png"},
		{img:"css/images/nikempng/instagram.png"},
		{img:"css/images/nikempng/youtube.png"},
	];



//Women Section
//Nike Women Shoes
	this.nikeWomenShoes =[
		{name: "NIKEiD", img:"css/images/nikewomen/nikeid.png", desc: "Nike Airforce 1 Suede iD"},
		{name: "RUNNING", img:"css/images/nikewomen/running.png", desc: "Nike Zoom All Out Low"},
		{name: "GYM AND TRAINING", img:"css/images/nikewomen/gym.png", desc: "Nike Metcon DSX Flyknit"},
		{name: "LIFESTYLE", img:"css/images/nikewomen/lifestyle.png", desc: "Nike Air Huarache"}
	];

//Women Nike+Apps
	this.wNikePlusApps = [
		{name: "Nike+", desc:"All You Need To Be Your Best", img:"css/images/nikewomen/nikeplus.png"},
		{name: "Nike+ Run Club", desc:"Your perfect running partner", img:"css/images/nikewomen/nrc.png"},
		{name: "Nike+Training Club", desc: "Your ultimate personal trainer", img:"css/images/nikewomen/ntc.png"},
		{name: "Nike+Snkrs", desc:"Your ultimate sneaker destination", img:"css/images/nikewomen/snkrs.png"}
	];
//Women Nike Social Media
	this.wNikeFollow = [
		{img:"css/images/nikempng/twitter.png"},
		{img:"css/images/nikempng/facebook.png"},
		{img:"css/images/nikempng/instagram.png"},
		{img:"css/images/nikempng/youtube.png"},
		{img:"css/images/nikewomen/spotify.png"},
		{img:"css/images/nikewomen/pininterest.png"},
		{img:"css/images/nikewomen/tumblr.png"}
	];


//Kids Section
//Kids Nike Benefits
	this.bestOfNike = [
		{title: "Sign up for email", desc: "Get the latest news and offers.", img:"css/images/nikebpics/signup.png"},
		{title: "Size guide", desc: "Find the right size for your young athlete.", img:"css/images/nikebpics/sizeguide.png"},
		{title: "Gear up", desc: "Everything your young athletes need.", img:"css/images/nikebpics/gearup.png"},
		{title: "Free shipping with nike+", desc: "Wear it, test it, keep what you like.", img:"css/images/nikebpics/freeshipping.png"}
	];


//Boys Section
//Boys Shoes
	this.bNikeShoes =
	[
	 {title: "Running", img: "css/images/nikebpics/running.png"},
	 {title: "Basketball", img: "css/images/nikebpics/basketball.png"},
	 {title: "Soccer", img: "css/images/nikebpics/soccer.png"},
	 {title: "Lifestyle", img: "css/images/nikebpics/lifestyle.png"},
	 {title: "Training", img: "css/images/nikebpics/training.png"},
	 {title: "Jordan", img: "css/images/nikebpics/jordan.png"}
	];

//Boys Clothes
	this.bNikeClothes =
	[
	 {img: "css/images/nikebpics/tops.png"},
	 {img: "css/images/nikebpics/shorts.png"},
	 {img: "css/images/nikebpics/hoodies.png"},
	 {img: "css/images/nikebpics/baselayer.png"},
	 {img: "css/images/nikebpics/socks.png"},
	 {img: "css/images/nikebpics/equipment.png"}
	];

//Boys Checklist
	this.bNikeCheckList =
	[
	 {title: "Soccer Checklist", img:'css/images/nikebpics/soccercheck.png'},
	 {title: "Running Checklist", img:'css/images/nikebpics/runningcheck.png'},
	 {title: "Basketball Checklist", img: 'css/images/nikebpics/basketballcheck.png'}
	];

//Boys Product Poster Page
	this.bProdCategShoes = [
		{title: "Running", img:"./css/products/productsimage/nikebproducts/running.png",categ:'bRunning'},
		{title: "Basketball", img: "./css/products/productsimage/nikebproducts/basketball.png",categ:'bBasketball'},
		{title: "Soccer", img: "./css/products/productsimage/nikebproducts/soccer.png",categ:'bSoccer'},
		{title: "Lifestyle", img: "./css/products/productsimage/nikebproducts/lifestyle.png",categ:'bLifeStyle'},
		{title: "Training", img: "./css/products/productsimage/nikebproducts/training.png",categ:'bTraining'}
	];


//Girl Section
//Girl Shoes
	this.gNikeShoes = [
		{title: "running", img:"css/images/nikegpics/running.png"},
		{title: "basketball", img: "css/images/nikegpics/basketball.png"},
		{title: "soccer", img: "css/images/nikegpics/soccer.png"},
		{title: "lifestyle", img: "css/images/nikegpics/lifestyle.png"},
		{title: "training", img: "css/images/nikegpics/training.png"},
		{title: "jordan", img: "css/images/nikegpics/jordan.png"}
	];

//Girl Clothing
	this.gNikeClothes = [
		{img: "css/images/nikegpics/tops.png"},
		{img: "css/images/nikegpics/shorts.png"},
		{img: "css/images/nikegpics/hoodies.png"},
		{img: "css/images/nikegpics/tights.png"},
		{img: "css/images/nikegpics/socks.png"},
		{img: "css/images/nikegpics/equipment.png"}
	];

//Girl Checklist
	this.gNikeChecklist = [
		{title: "soccer checklist", img: "css/images/nikegpics/soccercheck.png"},
		{title: "running checklist", img: "css/images/nikegpics/runningcheck.png"},
		{title: "basketball checklist", img: "css/images/nikegpics/basketballcheck.png"}
	];

//Girls Poster Shoes
	this.gprodCategShoes = [
		{title: "Running", img: "css/products/productsimage/nikegproducts/running.png"},
		{title: "Basketball", img: "css/products/productsimage/nikegproducts/basketball.png"},
		{title: "Soccer", img: "css/products/productsimage/nikegproducts/soccer.png"},
		{title: "Lifestyle", img: "css/products/productsimage/nikegproducts/lifestyle.png"},
		{title: "Training", img: "css/products/productsimage/nikegproducts/training.png"},
		{title: "Jordan", img: "css/products/productsimage/nikegproducts/jordan.png"}
	];

//Customize Section
//Customize Blank Shoes
	this.cNikeShoes = [
		{title: "Air Max 1 Essential", img: "css/images/customizepics/airmax1ess.png"},
		{title: "Air Max 90 Essential", img: "css/images/customizepics/airmax90.png"},
		{title: "Air Zoom Pegasus 33", img: "css/images/customizepics/airzoompeg.png"},
		{title: "Kobe A.D.", img: "css/images/customizepics/kobead.png"},
		{title: "Air Huarache Essential", img: "css/images/customizepics/airhuraache.png"},
		{title: "Zoom Lebron Soldier 10", img: "css/images/customizepics/zoomlebron.png"},
		{title: "Air Max 90 2.0 Flyknit", img: "css/images/customizepics/airmax.png"},
		{title: "Metcon 3", img: "css/images/customizepics/metcon.png"}
	];

//Customize Summer Suede
	this.cNikeSuede = [
		{title: "NIKE AIR FORCE 1 LOW iD", img:"css/images/customizepics/lownikeair1.png"},
		{title: "NIKE AIR FORCE 1 MID iD", img: "css/images/customizepics/midair1.png"},
		{title: "NIKE AIR FORCE 1 HIGH iD", img: "css/images/customizepics/highair1.png"}
	];





	//Callback :)
	var fpromise = function(a,b){
		var promise =
		$http({
				method: a,
				url: b
			});
		 return promise.then(function(result){
			return result.data;
		})
	};





	//InTo LogOut
	this.getUser = function() {
	  return $http({
	    method: 'GET',
	    url: '/auth/me'
	  })
	  .then(function(res) {
	    console.log(res.data);
	    this.user_id=res.data.user_id;
			return res.data;
	  })
	  .catch(function(err) {
	    console.log(err);
	  })
	};

	this.logout = function() {
	  console.log('button works');
	  return $http({
	    method: 'GET',
	    url: '/auth/logout'
	  })
	  .then(function(res) {
	    return res.data;
	  })
	  .catch(function(err) {
	    console.log(err);
	  })
	};

}]);
