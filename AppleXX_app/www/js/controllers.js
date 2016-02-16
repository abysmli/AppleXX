angular.module('app.controllers', [])
     
.controller('menuCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('myPageCtrl', function($scope) {
    JsBarcode("#barcode","9780199532179",{format:"EAN", displayValue:true, fontSize:20});
})
   
.controller('mainPageCtrl', function($scope) {

})
      
.controller('scanQR-CodeCtrl', function($scope, $http, $cordovaBarcodeScanner) {
    $scope.scanBarcode = function() {
        $http.get('http://192.168.1.103:3000/appAPIs/getFirstLevelCustomer', { params: { id: '56c2461be0646b4141914fc7' } }).success(function (data,status) {
            alert(JSON.stringify(data));
        });

        // $cordovaBarcodeScanner.scan().then(function(imageData) {
        //     $http.get('http://192.168.1.103:3000/appAPIs/getFirstLevelCustomer', { params: { id: imageData.text } }).success(function (data,status) {
        //         alert(JSON.stringify(data));
        //     });
        // }, function(error) {
        //     console.log("An error happened -> " + error);
        // });
    };
})
   
.controller('aboutUsCtrl', function($scope) {

})
   
.controller('shopsCtrl', function($scope) {

})