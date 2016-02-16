angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('myinfoService', [function(){
	var myinfo = {};

	var addMyInfo = function(data) {
	    myinfo = data;
	};

	var getMyInfo = function(){
	    return myinfo;
	};

	return {
	    addMyInfo: addMyInfo,
	    getMyInfo: getMyInfo
	};
}]);