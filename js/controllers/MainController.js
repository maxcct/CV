(function(angular) {
	'use strict';
	angular.module('cvApp', ['ngAnimate'])
	.controller('MainController', ['$scope', function($scope) {
	$scope.sections = [
		{
			'conventional': {
				title: 'Conventional Education',
				text: 'placeholder'
			},
			'honest': {
				title: 'Honest Education',
				text: 'placeholder'
			},
			'verbose': {
				title: 'Verbose Education',
				text: 'placeholder' 
			}
		},

		{
			'conventional': {
				title: 'Conventional Experience',
				text: 'placeholder'
			},
			'honest': {
				title: 'Honest Experience',
				text: 'placeholder'
			},
			'verbose': {
				title: 'Verbose Experience',
				text: 'placeholder' 
			}
		},

		{
			'conventional': {
				title: 'Conventional Personal',
				text: 'placeholder'
			},
			'honest': {
				title: 'Honest Personal',
				text: 'placeholder'
			},
			'verbose': {
				title: 'Verbose Personal',
				text: 'placeholder' 
			}
		}
	];
	$scope.modes = [
		'Conventional', 'Honest', 'Verbose'];
	$scope.selection = $scope.modes[0];
	}]);
})(window.angular);
