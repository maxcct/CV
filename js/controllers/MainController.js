(function(angular) {
	'use strict';
	angular.module('cvApp', ['ngAnimate'])
	.controller('MainController', ['$scope', function($scope) {
	$scope.sections = [
		{	
			title: 'EDUCATION',
			'conventional': {
				entries: [{x: 'Udacity', y: 'Full-Stack Web Developer Nanodegree'},
						  {x: 'University of Cambridge', y: 'Master of Arts (Cantab) in English, Upper Second Class'}]
			},
			'honest': {
				entries: [{x: 'Udacity', y: 'Full-Stack Web Developer Nanodegree'},
					      {x: 'University of Cambridge', y: 'Master of Arts (Cantab) in English, Upper Second Class',
						   z: 'Cambridge BAs are automatically upgraded to MA (Cantab) a few years after graduating.' +
							  ' This is a little ridiculous.'}]
			},
			'verbose': {
				entries: [{x: 'Udacity', y: 'Full-Stack Web Developer Nanodegree'},
						  {x: 'University of Cambridge', y: 'Master of Arts (Cantab) in English, Upper Second Class',
						   z: 'I received firsts for my dissertations, but was dragged down by my exam scores, ' +
						   	  'because my handwriting is hopelessly slow and I was always physically incapable of ' +
						   	  'writing three complete essay answers in three hours. The fact that that archaic ' +
						   	  'technology is still used for examinations seems absurd to me.'}]
			}
		},

		{
			title: 'EXPERIENCE',
			'conventional': {
				entries: [{x: 'placeholder', y: 'placeholder'}]
			},
			'honest': {
				entries: [{x: 'placeholder', y: 'placeholder',
						   z: 'placeholder'}]
			},
			'verbose': {
				entries: [{x: 'placeholder', y: 'placeholder',
						   z: 'placeholder'}]
			}
		},

		{
			title: 'PERSONAL',
			'conventional': {
				entries: [{x: 'placeholder', y: 'placeholder'}]
			},
			'honest': {
				entries: [{x: 'placeholder', y: 'placeholder',
						   z: 'placeholder'}]
			},
			'verbose': {
				entries: [{x: 'placeholder', y: 'placeholder',
						   z: 'placeholder'}]
			}
		}
	];
	$scope.modes = ['Conventional', 'Honest', 'Verbose'];
	$scope.selection = $scope.modes[0];
	$scope.name = 'MAX CHARLES COMPTON TREVITT';
	$scope.github = 'github.com/maxcct';
	$scope.linkedin = 'linkedin.com/in/maxcct';
	$scope.email = 'maxcct@cantab.net';
	$scope.mobile = '55 2183 8926';
	}]);
})(window.angular);
