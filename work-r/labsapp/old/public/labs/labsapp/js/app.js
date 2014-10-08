/*global document, window, angular*/
(function () {
    "use strict";

	var private_functions = {},
		public_funtions = {};

	window.chrometwo_require(['jquery', 'chrome_lib',window.location.pathname+'/js/jszip.min.js', '/webassets/avalon/j/lib/angular/1.2.8/angular.min.js'], function (jq, lib,JSZip) {
		var app = window.angular.module('myapp', []).config( [
            '$compileProvider',
            function( $compileProvider )
            {
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|blob|file|chrome-extension):/);
                // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
            }
        ]);

		app.controller('AppCtrl', function ($scope, $location, $http) {
                    vars($scope);
                    appCommon($scope);
                    mainctrl($scope,JSZip);
		});

		window.angular.bootstrap(document, ['myapp']);
		jq('#main').css('visibility', 'visible');
	});
}());
