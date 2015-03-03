var template_path="templates/";
var app = angular.module("login", ['ui.bootstrap', 'ngRoute']);

	app
	
	.config(function($routeProvider) 
	{
		

		$routeProvider
		.when('/restricted', 
		{
			templateUrl: template_path + 'view_restricted.html'
		})
		.when('/', 
		{
			templateUrl: template_path + 'view_login.html'
		})
		.otherwise(
		{
			redirectTo: '/'
		});
	})
	
	.controller("loginController", [ '$rootScope', '$scope', '$interval', '$modal', '$location',function($rootScope, $scope, $interval, $modal, $location) 
	{
		$scope.submitted = false;
		$rootScope.loggedIn=false;
		$scope.login = function () 
		{
			if ( $scope.form.$valid && $scope.loginRequest() ) 
			{
				$scope.navigate("restricted");
				$rootScope.loggedIn=true;
			} 
			else 
			{
				$scope.loggedIn=false;
				$rootScope.loggedIn=false;
				$scope.open();
			}
		};
		
		$scope.navigate = function ( to )
		{
			$location.url( to );
		};
		
		$scope.loginRequest=function()
		{
			if($scope.username=="user" && $scope.password=="pass132")
			{
				return true;
			}else
			{
				return false;
			}
		};
		
		$scope.open = function (size) 
		{
			var modalInstance = $modal.open(
			{
				templateUrl: template_path + 'dialog_loginerror.html',
				controller: 'modalInstController',
				size: size,
				resolve: 
				{
					//
				}
			});
		};
	}])
	
	.controller("restrictedController", [ '$rootScope', function($rootScope)
	{
		//check if User is really logged in
	}])
	
	.controller('modalInstController', [ '$scope', '$modalInstance', function ($scope, $modalInstance)
	{
		$scope.ok = function ()
		{
			$modalInstance.close();
		};
	}])
	
	.directive('dktooltip', ['$window', function ($window) 
	{
		return {

		  templateUrl: function(elem, attr)
		  {
			  return template_path + 'tooltip_'+attr.dktooltip+'.html';
		  },
		  link:function(scope, element, attrs) 
		  {
			for (var i in element.children()[0])
			{
				var elem = angular.element(element.children()[0]);
				elem.parent().parent().append(angular.element(element.children()[0]));	
			}			
		  }
		  
	  };
	}]);
