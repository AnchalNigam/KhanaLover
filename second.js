var foodieapp = angular.module("foodieApp", ["ngRoute"]);
foodieapp.config(function($routeProvider,$locationProvider) {
	
	  $locationProvider.hashPrefix('');
	$routeProvider
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
		
		cost: "3000",
		timing:"10AM to 12PM (MON-SUN)",
		imageUrl:"conn.jpg"
		
	},
	{
		name:"Connoisseur Restaurant",
		address:"49A, MG Marg, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Shubhanjali Apartment",
		category:"Casual.Good for kids.Groups",
		vote:"4.5",
		cuisines:"Modern Indian",
		
		cost: "2000",
		timing:"8AM to 9PM (MON-SUN)",
		imageUrl:"coffee.jpg"
		
		
	},
	{
	    name:"Tandoor",
		address:"Rewa Building, 13, Leader Road, Allahabad, Uttar Pradesh 211003",
		location:"Leader Road",
		category:"Casual.Good for kids.Groups",
		vote:"4.0",
		cuisines:"Modern Indian",
		
		cost: "1000",
		timing:"10AM to 9PM (MON-SUN)",
		imageUrl:"tandoor.jpg"
			
	},
	{
	    name:"Kohinoor Restaurant",
		address:"LG1,LG2, Vinayak Tower, MG Marg, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Vinayak Tower",
		category:"Casual.Groups",
		vote:"4.2",
		cuisines:"Indian",
		
		cost: "2500",
		timing:"10AM to 12PM (MON-SUN)",
		imageUrl:"kohi.jpg"
			
	},
	{
		name:"Dewsis",
		address:"2 MG Marg, Opp. High Court, Hanuman Mandir, Allahabad, Uttar Pradesh 211001",
		location:"High Court",
		category:"Good for kids.Sandwitches",
		vote:"3.9",
		cuisines:"Modern Indian",
		
		cost: "1000",
		timing:"9AM to 10PM (MON-SUN)",
		imageUrl:"dewis.jpg"
		
	},
	{
		name:"Eat On",
		address:"19/35, Palace Compound, MG Marg, Civil Lines, Allahabad, Uttar Pradesh 211001",
		location:"Palace Compound",
		category:"Good for kids.Groups",
		vote:"4.6",
		cuisines:"Modern Indian",
		
		cost: "500",
		timing:"9AM to 10PM (MON-SUN)",
		imageUrl:"eaton.jpg"
		
	}];
   $scope.resturant=resturants[$routeParams.id-1];
     
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
		imageUrl:"conn.jpg"
		
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
		imageUrl:"coffee.jpg"
		
		
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
		imageUrl:"tandoor.jpg"
			
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
		imageUrl:"kohi.jpg"
			
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
		imageUrl:"dewis.jpg",
		images:["dewis.jpg","eaton.jpg"]
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
		imageUrl:"eaton.jpg"
		
	}];
   
});