app.controller('MainController', ['$scope', function($scope) {
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
			'braggy': {
				title: 'Braggy Education',
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
			'braggy': {
				title: 'Braggy Experience',
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
			'braggy': {
				title: 'Braggy Personal',
				text: 'placeholder' 
			}
		}
	];
}]);
