app.controller('ModeController', ['$scope', function($scope) {
	$scope.modes = [
		'conventional', 'honest', 'bragging'];
	$scope.selection = $scope.modes[0];
}]);
