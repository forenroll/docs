/*global document, window, angular*/
(function () {
  "use strict";
  
  var private_functions = {}, public_funtions = {};
  
  window.chrometwo_require([
  'jquery', 'chrome_lib',
  '/webassets/avalon/j/lib/angular/1.2.8/angular.min.js',
  window.location.pathname+'/js/render/jszip.min.js',
  window.location.pathname+'/js/render/opensave.js',
  window.location.pathname+'/js/render/Blob.js',
  window.location.pathname+'/js/render/fileSaver.js',
  window.location.pathname+'/js/render/browser.js',
  window.location.pathname+'/js/render/swfobject.js',
  window.location.pathname+'/js/render/downloadify.min.js',
  window.location.pathname+'/js/service/vars.js',
  window.location.pathname+'/js/service/appCommon.js',
  window.location.pathname+'/js/controller/mainctrl.js' 
  ], function (jq, lib,angular,JSZip) {
    var app = window.angular.module('myapp', []).config( [
    '$compileProvider',
    function( $compileProvider ){
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
    jq('#chromed-app-content').css('visibility', 'visible');       
  });  
}());
