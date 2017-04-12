app.directive('cvInfo', function() { 
	/*
	Angular converts element names into
	camel case for the purposes of matching directives, so
	'appInfo' here matches 'app-info' in index.html.
	*/
	return {
		restrict: 'E',
		/* 
		Specifies how the directive will be used in the view.
		The 'E' means it will be used as a new HTML element.
		*/

		scope: {
		/*
		Specifies that we will pass information into this directive
		through an attribute named 'info'. The '=' tells the directive
		to look for an attribute named 'info' in the '<app-info>' element.
		The data stored in the HMTL 'info' attribute is then available to
		use in the template given by 'templateURL'.
		*/
			info: '=' 
		}, 
		templateUrl: 'js/directives/cvInfo.html'
		// Specifies the HTML to use in order to display the data in 'scope.info'.
	}; 
});
