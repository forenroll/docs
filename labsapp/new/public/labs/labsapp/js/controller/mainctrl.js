function mainctrl($scope,JSZip) {
  var browserversion = getBrowser();
  if (browserversion.browser === "IE" && browserversion.version <= 8) {
    $scope.normalPage = "0";
    $scope.browserIncompatible = "1";
    return;
  }else/* if (browserversion.browser === "IE" && browserversion.version == 9)*/ {
    $scope.isIEBelow10 = "1";
    flashDataIds = [];
    $scope.flashData=flashDataIds;
  }
  
  $scope.generate = function(){
    $scope.resultData = "a,b\nc,d";   
    $scope.resultshow = "1";
    if($scope.isIEBelow10 === "1"){      
      // Opensave
      var paramArrayOS = [];
      paramArrayOS[1] = {"width":150, "height":24, "label":"Opensave-Export", "index":1,"data":$scope.resultData,
	"textSize":18, "bgString":"bgWhite", "filename":"Opensave-Export.csv", "buttonDiv":"opensave"};
      renderExport4IE(paramArrayOS); 
      
      // Downloadify
      var zip = new JSZip();
      zip.file("file1.csv", $scope.resultData);
      zip.file("file2.csv", $scope.resultData);
      zip.file("file3.csv", $scope.resultData);
      var zipcontent4IE = zip.generate({type : "base64"});
      var paramArrayD = [];
      paramArrayD[0] = {"id":"DownloadifyCSV", "filename":"Downloadify-Export.csv", "data":$scope.resultData,
	"bgString": "exportWhite", "width": 50, "height": 20};
      paramArrayD[1] = {"id":"DownloadifyZIP", "filename":"all_configs.zip", "data":zipcontent4IE,
	"bgString": "exportWhite", "width": 50, "height": 20, "dataType": "base64"};
      renderDownload4IE(paramArrayD);
    } 
    
    $scope.scroll2Id('#resultsId');
    window.chrometwo_require(["analytics/main"], function (analytics) {
      analytics.trigger("LabsCompletion");        
    });
  }
  
  $scope.inputChanged =  function(){
    $scope.resultshow = '0'; 
  }
  
  $scope.export = function(data,title,type,head,isFlash,flashDataIndex){
    var csvContent = head+"\n";
    csvContent += data;
    if(isFlash == "isFlash"){
      flashDataIds[flashDataIndex] = csvContent.replace(new RegExp("&","gm"),"and");
    }else{
      var blob = new Blob([csvContent], {type: type});
      saveAs(blob, title);
    }
  }  
  
  $scope.export2ZIP = function(data,title,type){
      var zip = new JSZip();
      zip.file("file1.csv", $scope.resultData);
      zip.file("file2.csv", $scope.resultData);
      zip.file("file3.csv", $scope.resultData);
      var zipcontent4IE = zip.generate({type : "blob"});
      var zipBlob = new Blob([zipcontent4IE], {type :type});
      saveAs(zipBlob, title);
  }  
  
}
