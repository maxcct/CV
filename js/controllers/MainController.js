(function(angular) {
	'use strict';
	angular.module('cvApp', ['ngAnimate', 'ngMaterial'])
	.controller('MainController', ['$scope', function($scope) {
	$scope.sections = [
		{	
			title: 'EDUCATION',
			'conventional': {
				entries: [{x: 'Udacity', y: 'Full-Stack Web Developer Nanodegree'},
						  {x: 'University of Cambridge', y: 'Master of Arts (Cantab) in English, Upper Second Class'},
						  {x: 'Stanford University on Coursera', y: 'Machine Learning'},
						  {x: 'MITx on edX', y: 'Introduction to Computer Science'}]
			},
			'honest': {
				entries: [{x: 'Udacity', y: 'Full-Stack Web Developer Nanodegree'},			
					      {x: 'University of Cambridge', y: 'Master of Arts (Cantab) in English, Upper Second Class',
						   z: 'Cambridge BAs are automatically upgraded to MA (Cantab) a few years after graduating.' +
							  ' This is a little ridiculous.'},
						  {x: 'Stanford University / Coursera', y: 'Machine Learning',
						   z: 'This is an 11-week Mooc that outlines the algorithms and techniques used in the most' +
						      'common approaches to machine leaning.'},
						  {x: 'MITx on edX', y: 'Introduction to Computer Science',
						   z: 'This is a seven-week Mooc that outlines the fundamental concepts of computer science' +
						      'common approaches to machine leaning.'}]
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
			title: 'PROJECTS',
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
	$scope.backgrounds = ['img/la-muse.jpg', 'img/wave.jpg', 'img/scream.jpg', 'img/rain-princess.jpg',
						  'img/udnie.jpg', 'img/wreck.jpg', 'img/road.jpg'];
	$scope.slider = 0;
	$scope.name = 'MAX CHARLES COMPTON TREVITT';
	$scope.github = 'github.com/maxcct';
	$scope.linkedin = 'linkedin.com/in/maxcct';
	$scope.email = 'maxcct@cantab.net';
	$scope.mobile = '55 2183 8926';
	}]);
})(window.angular);
