function mainctrl($scope,JSZip){
  
  $scope.generate = function(){    
    $scope.resultshow = "1";
    $scope.scroll2Id('#resultsId');
    window.chrometwo_require(["analytics/main"], function (analytics) {
      analytics.trigger("LabsCompletion");        
    });
  }
  
  $scope.inputChanged =  function(){
    $scope.resultshow = '0'    
  }
  
}
