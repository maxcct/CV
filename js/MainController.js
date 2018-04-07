(function(angular) {
	'use strict';
	angular.module('cvApp', ['ngAnimate', 'ngMaterial'])
	.controller('MainController', ['$scope', function($scope) {
	$scope.sections = [
		{	
			title: 'EDUCATION',
			'concise': {
				entries: [{w: 'Udacity',
						   x: '2016–17',
						   z: 'Full-Stack Web Developer Nanodegree'},

						  {w: 'University of Cambridge',
						   x: '2007–10',
						   z: 'Master of Arts (Cantab) in English, 2.1'},

						  {w: 'Stanford University on Coursera',
						   x: '2017',
						   z: 'Machine Learning'},

						  {w: 'MITx on edX',
						   x: '2016',
						   z: 'Introduction to Computer Science'}]
			},
			'descriptive': {
				entries: [{w: 'Udacity',
						   x: '2016–17',
						   y: 'Full-Stack Web Developer Nanodegree',
						   z: 'This course guides you through a series of projects that entail building complex full-stack web applications, from UX all the way to configuration of an AWS server instance.'},

					      {w: 'University of Cambridge',
					       x: '2007–10',
					       y: 'Master of Arts (Cantab) in English, Upper Second Class',
						   z: 'This three-year undergraduate degree surveys society, history and philosophy through the lens of English language literature from the Middle Ages to the present day (actually, it stopped around the 1970s — this is Cambridge, after all).'},

						  {w: 'Stanford University / Coursera',
						   x: '2017',
						   y: 'Machine Learning',
						   z: 'This is a certificated course rather than a comprehensive programme of study like the Udacity ‘Nanodegree’ qualification. More specifically, it is an 11-week Mooc, complete with MATLAB programming exercises, which outlines the algorithms and techniques used in the principal varieties of machine leaning. It was extremely challenging, but I passed with a total score of 99.6%.'},

						  {w: 'MITx on edX',
						   x: '2016',
						   y: 'Introduction to Computer Science',
						   z: 'Also a certificated course, in this case for a seven-week Mooc that outlines the fundamental concepts of computer science using Python. I passed with a total score of 99.2%.'}]
			},
			'verbose': {
				entries: [{w: 'Udacity',
						   x: 'Dec 2016 – Mar 2017',
						   y: 'Full-Stack Web Developer Nanodegree',
						   z: 'This mode of education is evidently still in its infancy, but I believe it’s the future. With online platforms such as these, anyone from anywhere in the world can train themselves efficiently and effectively up to a professional level in a broad range of software development disciplines, if they can scrape together around US$200 a month. Not nothing, but trivial compared with the kind of investment required for a bootcamp or a college/university degree. Plus, it just kinda makes sense to learn web development on a web platform!'},

						  {w: 'University of Cambridge',
						   x: '2007–10',
						   y: 'Master of Arts (Cantab) in English, Upper Second Class',
						   z: 'Why English? I’d always been strongly drawn to physics, but the schools I attended prior to university weren’t the best and I was more self-taught than formally educated. Interpreting literary art was something I could just do; applied mathematics was not. Ultimately my degree was wonderfully mind-expanding and I have no regrets, other than that I wish I’d heard of computer science so I could have considered pursuing that discipline! FYI, this isn’t a proper master’s degree: absurdly, Cambridge bachelor’s degrees are automatically upgraded to master’s — with the parenthetical ‘Cantab’ — a few years after graduating.'},

						  {w: 'Stanford University / Coursera',
						   x: 'Jan – Apr 2017',
						   y: 'Machine Learning',
						   z: 'This 11-week Mooc outlines the algorithms and techniques employed in the most widely used approaches to machine learning, complete with programming exercises conducted in Octave/MATLAB. It covers linear and logistic regression, SVUs, K-means clustering, collaborative filtering and online learning, among other algorithms. It also covers topics such as bias and variance, feature and parameter regularisation normalisation.'},

						  {w: 'MITx on edX',
						   x: 'Jul – Sep 2016',
						   y: 'Introduction to Computer Science and Programming Using Python',
						   z: 'This seven-week Mooc outlines the fundamental concepts of computer science. It covers subjects such as data structures, recursion, search-and-sort algorithms and Big O notation.'}]
			}
		},

		{
			title: 'EXPERIENCE',
			'concise': {
				entries: [{w: 'SpareRoom',
						   x: 'Sep 2017 to present',
						   y: 'Web Developer',
						   z: 'Develop new features and maintain existing functionality for SpareRoom’s online platforms.'},

						  {w: 'Wildcat Dispatches: For Dangerous Times',
						   x: 'Nov 2016 to present',
						   y: 'Webmaster and Lead Editor',
						   z: 'Co-founded this online political magazine.'},

						  {w: 'Verso Books',
						   x: 'Oct 2016 to Sep 2017',
						   y: 'Freelance Book Editor',
						   z: 'General editorial work on a postcolonial studies book.'},


						  {w: 'Southbank Centre',
						   x: 'Aug 2015 to Apr 2017',
						   y: 'Freelance Editor',
						   z: 'Copyediting, factchecking and copywriting.'},

						  {w: 'wordy.com',
						   x: 'Dec 2015 to Jul 2017',
						   y: 'Copyeditor',
						   z: 'Rewriting and copyediting for a broad range of clients.'},

						  {w: 'Groupon UK&IE',
						   x: 'Apr 2011 to Sep 2014',
						   y: 'Editor for London',
						   z: 'Coordinated editorial for Greater London and Surrey (formerly Northern England). Was responsible for dozens of features a day, involving collaboration with many people in various roles companywide.'}]
			},
			'descriptive': {
				entries: [{w: 'SpareRoom',
						   x: 'Sep 2017 to present',
						   y: 'Web Developer',
						   z: 'We are currently in the process of modernising SpareRoom’s online platforms. I am one of a three-person team working on transforming the front-end from a vanilla JavaScript- and Xslate-templating-based system layered on top of a perl back-end, into a webpack set-up using ES6, React and a RESTful interface with the back-end.'},

						  {w: 'Wildcat Dispatches: For Dangerous Times',
						   x: 'Nov 2016 to present',
						   y: 'Webmaster and Lead Editor',
						   z: 'I co-founded this online anti-authoritarian, anti-racist political magazine, act in an executive editorial capacity and manage the website. I have also written pieces for it.'},

						  {w: 'Verso Books',
						   x: 'Oct 2016 to Sep 2017',
						   y: 'Freelance Book Editor',
						   z: 'General editorial work on Priyamvada Gopal’s book ‘Insurgent Empire: Anticolonialism and Metropolitan Dissent’.'},

						  {w: 'Southbank Centre',
						   x: 'Aug 2015 to Apr 2017',
						   y: 'Freelance Editor',
						   z: 'Copyediting, factchecking and copywriting (website content, brochures, programmes, marketing materials, etcetera), performed remotely.'},

						  {w: 'wordy.com',
						   x: 'Dec 2015 to Jul 2017',
						   y: 'Copyeditor',
						   z: 'Rewriting and copyediting of materials ranging from scientific papers to love poems.'},

						  {w: 'Groupon UK&IE',
						   x: 'Apr 2011 to Sep 2014',
						   y: 'Editor for London',
						   z: 'Coordinated editorial for Greater London and Surrey (formerly Northern England). Was responsible for dozens of features a day, involving collaboration with many people in various roles companywide. Played a primary role in developing a more comprensively automated system of data entry for the editorial department.'}]
			},
			'verbose': {
				entries: [{w: 'SpareRoom',
						   x: 'Sep 2017 to present',
						   y: 'Web Developer',
						   z: 'I have been instrumental in building and revamping features such as API-based user profile functionality, a unified system for controlling modals, the payments flow and the site navigation, as well as helping to modernise the platform’s front-end technology.'},

						  {w: 'Wildcat Dispatches: For Dangerous Times',
						   x: 'Nov 2016 to present',
						   y: 'Associate Editor and Webmaster',
						   z: 'I co-founded this new web-based political magazine in opposition to the political tides responsible for Brexit and the election of Trump. Someone else built the Wordpress theme originally, but I’ve done a fair bit of work to improve its CSS and especially its responsiveness.'},

						  {w: 'Verso Books',
						   x: 'Oct 2016 to Sep 2017',
						   y: 'Freelance Book Editor',
						   z: 'General editorial work on Priyamvada Gopal’s book on the resistance to empire of the colonised peoples themselves, and the ways in which their struggle shaped the anticolonial movements that arose within empire itself.'},

						  {w: 'Southbank Centre',
						   x: 'Aug 2015 to Apr 2017',
						   y: 'Freelance Editor',
						   z: 'Copyediting, factchecking and copywriting for Southbank Centre, a major British cultural institution encompassing a complex of artistic venues situated on the south bank of the Thames in London, England.'},

						  {w: 'wordy.com',
						   x: 'Dec 2015 to Jul 2017',
						   y: 'Copyeditor',
						   z: 'If you’re ever in need of occasional copyediting work, I would recommend trying out this well-designed platform for freelancers.'},

						  {w: 'Groupon UK&IE',
						   x: 'Apr 2011 to Sep 2014',
						   y: 'Editor for London, Best-of-Division Editor, Events Editor',
						   z: 'Coordinated editorial for Greater London and Surrey (formerly Northern England). Was responsible for dozens of features a day, involving the collaboration of many people in various roles companywide. Liaised with other departments to ensure deadlines were met, errors minimised and revenue maximised. Held primary responsibility for editing Best-of-Division deals (those with the highest estimated revenue in each region nationwide) and joint responsibility for editing all Events deals such as concerts, festivals and exhibitions. Edited and/or wrote up to twenty features each day, aiming to: encourage purchases through the optimal presentation of merchants and services, while ensuring the published features were as transparent and informative as possible for customers. Oversaw and augmented the use of lucid and engaging style to foster repeat readership and maintain market-leading brand identity, while ensuring compliance with the guidelines of regulatory bodies. Collaborated in senior capacity with other editorial stages involved in the production of each feature, aiming to: help shape the evolution of the house style and departmental best practices ensure proper comprehension and execution of editorial and QA standards by each stage improve creative writers’ performance and efficiency through regular feedback. Helped establish and coordinate a site-editing team to handle the CMS side of editorial work, developing new technological procedures and tools.'}]
			}
		},

		{
			title: 'PROJECTS',
			'concise': {
				entries: [{w: 'Events Page',
						   x: 'maxcct.github.io/event-page',
						   z: 'React'},

						  {w: 'Elemental',
						   x: 'github.com/maxcct/quintessence',
						   z: 'Python with Tkinter GUI'},

						  {w: 'Interactive Résumé',
						   x: 'github.com/maxcct/cv',
						   z: 'AngularJS'},

						  {w: 'Neighbourhood Map',
						   x: 'maxcct.github.io/neighborhood-map',
						   z: 'Knockout'},

						  {w: 'NGO Emporium',
						   x: 'ec2-34-207-99-196.compute-1.amazonaws.com',
						   z: 'Python, JavaScript, Flask, SQLAlchemy/PostgreSQL, OAuth 2 and the Wikipedia API'},

						  {w: 'Multi-User Blog',
						   x: 'hwapp123.appspot.com/blog',
						   z: 'Python, Jinja2, Google App Engine and Google Cloud Datastore'},

						  {w: 'Tournament Simulator',
						   x: 'github.com/maxcct/tournament',
						   z: 'Python and PostgreSQL'}]
			},
			'descriptive': {
				entries: [{w: 'Events Page',
						   x: 'maxcct.github.io/event-page',
						   z: 'A listing page for an event, built using React. This was my SpareRoom technical test.'},

						  {w: 'Elemental',
						   x: 'github.com/maxcct/quintessence',
						   z: 'A virtual board game with an invented rule set, played on a chess-like board. Built in Python, using Tkinter for the GUI.'},

						  {w: 'Interactive Résumé',
						   x: 'github.com/maxcct/cv',
						   z: 'This page you’re looking at right now! Built using AngularJS, with a little help from Bootstrap.'},

						  {w: 'Neighbourhood Map',
						   x: 'maxcct.github.io/neighborhood-map',
						   z: 'Interactive Google Maps-based web app, built using JavaScript, Knockout and the Wikipedia API.'},

						  {w: 'NGO Emporium',
						   x: 'ec2-34-207-99-196.compute-1.amazonaws.com',
						   z: 'Database-backed web application with user auth, built using Python, JavaScript, Flask, SQLAlchemy/PostgreSQL, OAuth 2 and the Wikipedia API. I also configured an Apache server instance on AWS and got the site up and running there (though it’s no longer live).'},

						  {w: 'Multi-User Blog',
						   x: 'hwapp123.appspot.com/blog',
						   z: 'Built using Python, Jinja2, Google App Engine and Google Cloud Datastore.'},

						  {w: 'Tournament Simulator',
						   x: 'github.com/maxcct/tournament',
						   z: 'Used Python and PostgreSQL to simulate ‘Swiss-system’ tournaments and store results in a database.'}]
			},
			'verbose': {
				entries: [{w: 'Events Page',
						   x: 'maxcct.github.io/event-page',
						   z: 'I’m sure I’d build this very differently if I were to do it again now, but it scored me my first job as a web developer!'},

						  {w: 'Elemental',
						   x: 'github.com/maxcct/quintessence',
						   z: "A virtual board game played on a 24x24 chess board. Each player has three sets of air, fire, water and earth pieces. Each element has its own moveset and can attack one opposing element. Victory is achieved by getting one of each element to your opponent's side of the board, or by destroying all three of any of your opponent's element types (thus making it impossible for them to win). Built in Python, using Tkinter for the GUI."},

						  {w: 'Interactive Résumé',
						   x: 'github.com/maxcct/cv',
						   z: 'This page you’re looking at right now! Built using AngularJS, with a little help from Bootstrap. The slider above cycles through various background images, which are versions of a photograph of me walking down the centre of the road that leads to Monument Valley in the US, taken by Christa Lamb (thatcamelwoman on Flickr). These variations were created using a Tensorflow application (built by Logan Engstrom (github.com/lengstrom/fast-style-transfer), not me) that transfers styles from artwork to other images. The style sources are, respectively, Pablo Picasso’s ‘La Muse’, Leonid Afremov’s ‘Rain Princess’, Edvard Munch’s ‘Scream’, Francis Picabia’s ‘Udnie’, Hokusai’s ‘The Great Wave Off Kanagawa’ and Joseph Turner’s ‘The Shipwreck of the Minotaur’, plus a black-and-white version of the original photograph.'},

						  {w: 'Neighbourhood Map',
						   x: 'maxcct.github.io/neighborhood-map',
						   z: 'Interactive Google Maps-based web app, built using JavaScript, Knockout and the Wikipedia API. There are markers for various point of interest; clicking on them triggers a request to the API, and the returned data is then presented to the user.'},

						  {w: 'NGO Emporium',
						   x: 'ec2-34-207-99-196.compute-1.amazonaws.com',
						   z: 'Database-backed web application with user auth, built using Python, JavaScript, Flask, SQLAlchemy/PostgreSQL, OAuth 2 (with Facebook and Google sign-in) and the Wikipedia API. I also configured an Apache server instance on AWS and got the site up and running there, though I eventually decided to stop paying the fee to keep it live. It is a platform for information on NGOs, categorised by region and focus, to which registered users could freely contribute.'},

						  {w: 'Multi-User Blog',
						   x: 'hwapp123.appspot.com/blog',
						   z: 'A basic blogging platform built using Python, Jinja2, Google App Engine and Google Cloud Datastore, with authentication.'},

						  {w: 'Tournament Simulator',
						   x: 'github.com/maxcct/tournament',
						   z: 'Used Python and PostgreSQL to simulate ‘Swiss-system’ tournaments and store results in a database.'}]
			}
		}
	];
	$scope.modes = ['Concise', 'Descriptive', 'Verbose'];
	$scope.selection = $scope.modes[0];
	$scope.backgrounds = ['img/wave.jpg', 'img/la-muse.jpg', 'img/scream.jpg', 'img/rain-princess.jpg',
						  'img/udnie.jpg', 'img/wreck.jpg', 'img/road.jpg'];
	$scope.slider = 0;
	$scope.name = 'MAX CHARLES COMPTON TREVITT';
	$scope.github = 'github.com/maxcct';
	$scope.linkedin = 'linkedin.com/in/maxcct';
	$scope.email = 'maxtrevitt@gmail.com';
	$scope.mobile = '07498 036045';
	}]);
})(window.angular);
