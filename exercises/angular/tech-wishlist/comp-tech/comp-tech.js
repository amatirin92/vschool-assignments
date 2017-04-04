angular.module('myApp')

  app.controller('compTechController', function ($scope) {
    $scope.myList = [
        {
            itemName: 'iPhone',
            itemImage: 'http://cdn2.gsmarena.com/vv/bigpic/apple-iphone-6s-plus.jpg',
            itemPrice: 800
         },
        {
            itemName: 'MacBook TouchBar',
            itemImage: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp13touch/silver/mbp13touch-silver-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1477352397902', 
            itemPrice: 2000
         },
        {
            itemName: 'Bose Headphones',
            itemImage: 'http://4.bp.blogspot.com/-F15sOIXfCDU/VmBVsgrVdNI/AAAAAAAAEpw/cjnXKPlxTB0/s1600/Samsung%2BLevel%2BOn%2BWireless.png',
            itemPrice: 450
        }
    ];
})