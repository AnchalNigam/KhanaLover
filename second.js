var foodieapp = angular.module("foodieApp", ["ngRoute"]);
foodieapp.config(function($routeProvider,$locationProvider) {
	
	  $locationProvider.hashPrefix('');
	$routeProvider
		.when("/",{
		templateUrl:"partials/frontpage.html",
		controller:"frontCtrl"
	
		
	})
	.when("/restrolist",{
		templateUrl:"partials/restrolist.html",
		controller:"listRestro"
	
		
	})
	.when("/resturants/:id",{
		templateUrl:"partials/resturants.html",
		controller:"restroListCtrl"
	
		
	});
	
	
});
foodieapp.controller('restroListCtrl', function($scope,$routeParams) {
	$scope.resturantId=$routeParams.id;
	var resturants=[
	{
		name:"Indian Coffee House",
		address:"15, M.G. Road, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Hindu Hostel",
		category:"Casual.Dining",
		vote:"4.8",
		cuisines:"Modern Indian",
		menu:["image/menu1.png","image/menu2.png","image/menu3.png"],
		photo:["image/res1.png","image/res2.png","image/res3.png"],
		cost: "3000",
		timing:"10AM to 12PM (MON-SUN)",
		imageUrl:"image/conn.jpg",
		deliver:"45 minutes(Max.)",
		num:["9026224948","9876543123","0532-2655090"],
		review:200
	},
	{
		name:"Connoisseur Restaurant",
		address:"49A, MG Marg, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Shubhanjali Apartment",
		category:"Casual.Good for kids.Groups",
		vote:"4.5",
		cuisines:"Modern Indian",
		menu:["image/menu1.png","image/menu2.png","image/menu3.png"],
		photo:["image/res1.png","image/res2.png","image/res3.png"],
		cost: "2000",
		timing:"8AM to 9PM (MON-SUN)",
		imageUrl:"image/coffee.jpg",
		deliver:"60 minutes(Max.)",
		num:["9026224948","9876543123","0532-2655090"],
		review:200
	},
	{
	    name:"Tandoor",
		address:"Rewa Building, 13, Leader Road, Allahabad, Uttar Pradesh 211003",
		location:"Leader Road",
		category:"Casual.Good for kids.Groups",
		vote:"4.0",
		cuisines:"Modern Indian",
		menu:["image/menu1.png","image/menu2.png","image/menu3.png"],
		photo:["image/res1.png","image/res2.png","image/res3.png"],
			
		cost: "1000",
		timing:"10AM to 9PM (MON-SUN)",
		imageUrl:"image/tandoor.jpg",
		deliver:"50 minutes(Max.)",
		num:["9026224948","9876543123","0532-2655090"],
		review:200
	},
	{
	    name:"Kohinoor Restaurant",
		address:"LG1,LG2, Vinayak Tower, MG Marg, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Vinayak Tower",
		category:"Casual.Groups",
		vote:"4.2",
		cuisines:"Indian",
		menu:["image/menu1.png","image/menu2.png","image/menu3.png"],
		photo:["image/res1.png","image/res2.png","image/res3.png"],
		cost: "2500",
		timing:"10AM to 12PM (MON-SUN)",
		imageUrl:"image/kohi.jpg",
			deliver:"30 minutes(Max.)",
			num:["9026224948","9876543123","0532-2655090"],
			review:200
	},
	{
		name:"Dewsis",
		address:"2 MG Marg, Opp. High Court, Hanuman Mandir, Allahabad, Uttar Pradesh 211001",
		location:"High Court",
		category:"Good for kids.Sandwitches",
		vote:"3.9",
		cuisines:"Modern Indian",
		menu:["image/menu1.png","image/menu2.png","image/menu3.png"],
		photo:["image/res1.png","image/res2.png","image/res3.png"],
		cost: "1000",
		timing:"9AM to 10PM (MON-SUN)",
		imageUrl:"image/dewis.jpg",
		deliver:"70 minutes(Max.)",
		num:["9026224948","9876543123","0532-2655090"],
		review:200
	},
	{
		name:"Eat On",
		address:"19/35, Palace Compound, MG Marg, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Palace Compound",
		category:"Good for kids.Groups",
		vote:"4.6",
		cuisines:"Modern Indian",
	    menu:["image/menu1.png","image/menu2.png","image/menu3.png"],
		photo:["image/res1.png","image/res2.png","image/res3.png"],
		cost: "500",
		timing:"9AM to 10PM (MON-SUN)",
		imageUrl:"image/eaton.jpg",
		deliver:"45 minutes(Max.)",
		num:["9026224948","9876543123","0532-2655090"],
		review:200
	}];
   $scope.resturant=resturants[$routeParams.id-1];
    $scope.images=["image/14.jpg","image/15.png","image/16.jpg","image/17.jpg","image/5.png","image/6.png","image/7.png","image/8.png",
	"image/9.png","image/10.png","image/11.png","image/12.jpg","image/13.png"];
     
});

foodieapp.controller('frontCtrl', function($scope) {
	 $scope.images=["image/14.jpg","image/15.png","image/16.jpg","image/17.jpg","image/5.png","image/6.png","image/7.png",
	 "image/8.png","image/9.png","image/10.png"];
	  $scope.trust=["image/ichtr.png","image/kohinoortr.png","image/tandoortr.png"];
	
});
foodieapp.controller('listRestro', function($scope) {
    $scope.resturants=[
	{
		name:"Indian Coffee House",
		address:"15, M.G. Road, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Hindu Hostel",
		category:"Casual.Dining",
		vote:"4.8",
		cuisines:"Modern Indian",
		id:1,
		cost: "3000",
		timing:"10AM to 12PM (MON-SUN)",
		imageUrl:"image/coffee.jpg",
		deliver:"45 minutes(Max.)"
	},
	{
		name:"Connoisseur Restaurant",
		address:"49A, MG Marg, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Shubhanjali Apartment",
		category:"Casual.Good for kids.Groups",
		vote:"4.5",
		cuisines:"Modern Indian",
		id:2,
		cost: "2000",
		timing:"8AM to 9PM (MON-SUN)",
		imageUrl:"image/conn.jpg",
		deliver:"60 minutes(Max.)"
		
	},
	{
	    name:"Tandoor",
		address:"Rewa Building, 13, Leader Road, Allahabad, Uttar Pradesh 211003",
		location:"Leader Road",
		category:"Casual.Good for kids.Groups",
		vote:"4.0",
		cuisines:"Modern Indian",
		id:3,
		cost: "1000",
		timing:"10AM to 9PM (MON-SUN)",
		imageUrl:"image/tandoor.jpg",
			deliver:"50 minutes(Max.)"
	},
	{
	    name:"Kohinoor Restaurant",
		address:"LG1,LG2, Vinayak Tower, MG Marg, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Vinayak Tower",
		category:"Casual.Groups",
		vote:"4.2",
		cuisines:"Indian",
		id:4,
		cost: "2500",
		timing:"10AM to 12PM (MON-SUN)",
		imageUrl:"image/kohi.jpg",
		deliver:"30 minutes(Max.)"	
	},
	{
		name:"Dewsis",
		address:"2 MG Marg, Opp. High Court, Hanuman Mandir, Allahabad, Uttar Pradesh 211001",
		location:"High Court",
		category:"Good for kids.Groups",
		vote:"3.9",
		cuisines:"Modern Indian",
		id:5,
		cost: "1000",
		timing:"9AM to 10PM (MON-SUN)",
		imageUrl:"image/dewis.jpg",
		
		deliver:"70 minutes(Max.)"
	},
	{
		name:"Eat On",
		address:"19/35, Palace Compound, MG Marg, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Palace Compound",
		category:"Good for kids.Groups.Sandwitches",
		vote:"4.6",
		cuisines:"Modern Indian",
		id:6,
		cost: "500",
		timing:"9AM to 10PM (MON-SUN)",
		imageUrl:"image/eaton.jpg",
		deliver:"45 minutes(Max.)"
		
	}];
	  $scope.images=["image/14.jpg","image/15.png","image/16.jpg","image/17.jpg","image/5.png","image/6.png","image/7.png","image/8.png"
	  ,"image/9.png","image/10.png","image/11.png","image/12.jpg","image/13.png"];
   
});