var NikeApp = angular.module('NikeApp',['ui.router', 'ngAnimate']);

NikeApp.run(function($rootScope, $state, $stateParams){
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});

NikeApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'./views/mainviews/home.html'
	})
	.state('men',{
		url:'/men',
		templateUrl: './views/mainviews/men.html',
		controller: 'NikeMenController'
	})
	.state('women',{
		url: '/women',
		templateUrl: './views/mainviews/women.html',
		controller: "NikeWomenController"
	})
	.state('boys', {
		url: '/boys',
		templateUrl: './views/mainviews/boys.html',
		controller: 'NikeBoysController'
	})
	.state('girls',{
		url:'/girls',
		templateUrl: './views/mainviews/girls.html',
		controller: 'NikeGirlController'
	})
	.state('customize', {
		url:'/customize',
		templateUrl: './views/mainviews/customize.html',
		controller: 'NikeCustomizeController'
	})

/////////////////
//Product Views//
////////////////

	//Men Products
	.state('mproduct', {
		url:'/mens-shoes',
		templateUrl: './views/productsviews/menshoes.html',
		controller: 'MensProdController'
	})

	.state('mLifeStyle', {
		url:'/mens-lifestyle',
		templateUrl:'./views/productsviews/mensviews/lifestyle.html',
		controller:'MensProdController'
	})

	.state('mRun', {
		url:'/mens-running',
		templateUrl:'./views/productsviews/mensviews/runstyle.html',
		controller: 'MensProdController'
	})

	.state('mBasketball', {
		url:'/mens-basketball',
		templateUrl:'./views/productsviews/mensviews/baskstyle.html',
		controller:'MensProdController'
	})

	.state('mSoccer', {
		url:'/mens-soccer',
		templateUrl: './views/productsviews/mensviews/soccer.html',
		controller:'MensProdController'
	})

	.state('mTraining', {
		url:'/mens-training-gym',
		templateUrl:'./views/productsviews/mensviews/training.html',
		controller:'MensProdController'
	})



	//NikeWomen
	.state('wproduct', {
		url: '/womens-shoes',
		templateUrl: './views/productsviews/womenshoes.html',
		controller: 'WomensProdController'
	})

	.state('wLifeStyle', {
		url:'/womens-lifestyle',
		templateUrl:'./views/productsviews/womensview/lifestyle.html',
		controller: 'WomensProdController'
	})

	.state('wRunning', {
		url:'/womens-running',
		templateUrl: './views/productsviews/womensview/running.html',
		controller:'WomensProdController'
	})

	.state('wBasketball', {
		url: '/womens-basketball',
		templateUrl: './views/productsviews/womensview/basketball.html',
		controller:'WomensProdController'
	})

	.state('wSoccer', {
		url: '/womens-soccer',
		templateUrl: './views/productsviews/womensview/soccer.html',
		controller:'WomensProdController'
	})

	.state('wTraining', {
		url: '/womens-training-gym',
		templateUrl: './views/productsviews/womensview/training.html',
		controller:'WomensProdController'
	})




//NikeBoys
	.state('bproduct', {
		url: '/boys-shoes',
		templateUrl: './views/productsviews/boyshoes.html',
		controller: "BoysProductController"
	})

	.state('bLifeStyle', {
		url:'/boys-lifestyle',
		templateUrl:'./views/productsviews/boyview/lifestyle.html',
		controller:'BoysProductController'
	})

	.state('bRunning', {
		url:'/boys-running',
		templateUrl:'./views/productsviews/boyview/running.html',
		controller:'BoysProductController'
	})

	.state('bBasketball', {
		url:'/boys-basketball',
		templateUrl:'./views/productsviews/boyview/basketball.html',
		controller:'BoysProductController'
	})

	.state('bSoccer', {
		url:'/boys-soccer',
		templateUrl:'./views/productsviews/boyview/soccer.html',
		controller:'BoysProductController'
	})

	.state('bTraining', {
		url:'/boys-training-gym',
		templateUrl:'./views/productsviews/boyview/training.html',
		controller:'BoysProductController'
	})





//NikeGirls
	.state('gproduct', {
		url: '/girls-shoes',
		templateUrl: './views/productsviews/girlsshoes.html',
		controller: "GirlsProdController"
	})

	.state('gLifeStyle', {
		templateUrl: './views/productsviews/girlviews/lifestyle.html',
		controller: 'GirlsProdController'
	})
	.state('gRunningStyle', {
		templateUrl: './views/productsviews/girlviews/running.html',
		controller: 'GirlsProdController'
	})
	.state('gBasketBallStyle', {
		templateUrl: './views/productsviews/girlviews/basketball.html',
		controller: 'GirlsProdController'
	})
	.state('gSoccerStyle', {
		templateUrl: './views/productsviews/girlviews/soccer.html',
		controller: 'GirlsProdController'
	})
	.state('gJordanStyle', {
		templateUrl: './views/productsviews/girlviews/jordan.html',
		controller: 'GirlsProdController'
	})




	//CheckOut Views
	.state('checkout', {
		url: "/checkout",
		templateUrl: "views/productsviews/checkout.html",
		controller:'CheckOutController'
	})
	.state('success', {
		url: '/success',
		templateUrl: "views/productsviews/success.html"
	})


	.state('mshoe', {
		url:'/shoe/:id',
		templateUrl: 'views/productsviews/productinfoview/productinfo.html',
		controller: 'MensProdController'
	})

	.state('wshoe', {
		url:'/wshoe/:id',
		templateUrl:'views/productsviews/productinfoview/wproductinfo.html',
		controller: 'WomensProdController'
	})

	.state('bshoe',{
		url:'/bshoe/:id',
		templateUrl: './views/productsviews/productinfoview/bproductinfo.html',
		controller:'BoysProductController'
	})

	.state('gshoe',{
		url:'/gshoe/:id',
		templateUrl:'./views/productsviews/productinfoview/gproductinfo.html',
		controller: 'GirlsProdController'
	})




//CHECK PRODUCT ID!!!!!!
	$urlRouterProvider
	.otherwise('/')
});
