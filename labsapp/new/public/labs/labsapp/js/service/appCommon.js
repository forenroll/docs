function appCommon($scope) {

    $scope.validateIP = function (ip) {
        var reg = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
        if(reg.test(ip)) {
            console.log(RegExp.$4);
            var ip1 = Number(RegExp.$1);
            var ip2 = Number(RegExp.$2);
            var ip3 = Number(RegExp.$3);
            var ip4 = Number(RegExp.$4);
            if (ip1 < 256 && ip2 < 256 && ip3 < 256 && ip4 < 256) {
                return true;
            }
        }
        return false;
    };

    $scope.validateName = function (text) {
        //var reg = /[a-zA-Z]{1,}[0-9]{1,}/;
	var reg = /[a-zA-Z]*[0-9]*/;
	if(reg.test(text)){
	  return true;
	}
	return false;
    };

    $scope.validateMac = function (mac) {
	var reg = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
        if(reg.test(mac)) {
	  return true;
        }
        return false;
    };

    $scope.showFilesContent = function (contentType,id) {
        if(contentType=='script') {
            $scope.displayType = 'script';
            $scope.scroll2Id('#'+id);
        }

        if(contentType=='file') {
            $scope.displayType = 'file';
            $scope.scroll2Id('#'+id);
        }
    };

    $scope.scroll2Id = function(id) {
        setTimeout(function(){
            $('html,body').animate({scrollTop: $(id).offset().top},'fast');
        }, 100);
    };

    $scope.generateFile = function(content) {
        var blob = new Blob([content], {type :'text/cmd'});
        var url = (window.URL || window.webkitURL).createObjectURL(blob);
        return url;
    };

    renderDownload4IE = function(paramArray){
      for(var i = 0; i < paramArray.length; i++){
      	var param = paramArray[i];
      	Downloadify.create(param.id,{
      	    filename: param.filename,
      	    data:param.data,
      	    transparent: false,
      	    swf:window.location.pathname+'/media/downloadify.swf',
      	    downloadImage:location.pathname+'/images/'+param.bgString+'.png',
      	    width: param.width,
      	    height: param.height,
      	    dataType: param.dataType,
      	    append: false
      	});
      }
    };

    renderExport4IE = function(paramArray){
      for(var i = 0; i < paramArray.length; i++){
      	var param = paramArray[i];
      	if(param != undefined){
      	  var p = document.getElementById(param.buttonDiv+'Parent');
      	  if(p.children[0].localName == "object"){
      	    p.removeChild(p.children[0]);
      	    var c = document.createElement('a');
      	    c.setAttribute("id",param.buttonDiv);
      	    p.appendChild(c);
      	  }
      	  var img_over = (param.imgover == undefined || param.imgover == "")?param.bgString:param.imgover;
      	  var textColor = (param.textColor == undefined || param.textColor == "")?"#00A0EB":param.textColor;
      	  opensave.make({
      	      width: param.width,
      	      height:param.height,
      	      label:param.label,
      	      textColor:textColor,
      	      textSize:param.textSize,
      	      image_up:window.location.pathname+'/images/'+param.bgString+'.png',
      	      image_down: window.location.pathname+'/images/'+param.bgString+'.png',
      	      image_over:window.location.pathname+'/images/'+img_over+'.png',
      	      filename:param.filename,
      	      buttonDiv:param.buttonDiv,
      	      dataID:param.buttonDiv+"Data"
      	  });
      	  flashDataIds[param.index] = param.data;
      	}
      }
    };

}