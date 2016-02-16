angular.module('app.controllers', [])
     
.controller('menuCtrl', function($scope) {

})

.controller('loginCtrl', function($scope, $http, $window, myinfoService) {
    $scope.login = function() {
        $http.get('http://0.0.0.0:3000/appAPIs/login', { params: { email: document.getElementById("login_email").value, password: document.getElementById("login_password").value } }).success(function (data,status) {
            if(data != 'error') {
                myinfoService.addMyInfo(data);
                $location.path('#/menu/tabs/myinfo');
            } else {
                alert('Login Failed!');
            }
        });
    }
})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('myPageCtrl', function($scope, myinfoService) {
    $scope.myinfo = myinfoService.getMyInfo();
    if ($scope.myinfo != undefined) {
        JsBarcode("#barcode",$scope.myinfo.barcode,{format:"EAN", displayValue:true, fontSize:20});
    }
})
   
.controller('mainPageCtrl', function($scope) {

})
      
.controller('scanQR-CodeCtrl', function($scope, $http, $cordovaBarcodeScanner) {
    $scope.scanBarcode = function() {
        // $http.get('http://192.168.1.103:3000/appAPIs/getFirstLevelCustomer', { params: { id: '56c2461be0646b4141914fc7' } }).success(function (data,status) {
        //     alert(JSON.stringify(data));
        // });

        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $http.get('http://192.168.1.103:3000/appAPIs/getFirstLevelCustomer', { params: { id: imageData.text } }).success(function (data,status) {
                alert(JSON.stringify(data));
            });
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
})
   
.controller('aboutUsCtrl', function($scope) {

})
   
.controller('shopsCtrl', function($scope) {

})