app.directive('switchMode', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'js/directives/switchMode.html',
		link: function(scope, element, attrs) { 
		/*
		The 'scope' argument is passed in from MainController's $scope, so
		any associated properties will be available to use in the template.
		The 'element' argument refers to the HTML element that corresponds
		with this directive. 'attrs' contains that element's attributes.
		*/
			scope.buttonText = "Switch", 
			scope.status = 'conventional', 

			scope.switch = function() { 

			};
		}
	};
});
