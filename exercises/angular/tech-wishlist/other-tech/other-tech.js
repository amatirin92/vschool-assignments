angular.module('myApp')

.controller('otherTechController', function($scope){
    $scope.myList = [
        {
            itemName: 'Electric Toothbrush',
            itemImage: 'https://cdn3.bigcommerce.com/s-1du1gjzpku/images/stencil/500x659/products/112/380/Vibrate-brush-starter-kit__06724.1480277953.jpg?c=2',
            itemPrice: 70
         },
        {
            itemName: 'Bose Speaker',
            itemImage: 'https://cdn-us-cf2.yottaa.net/54636bb786305e35ea00040e/ca3ea000f77501321219123dfe2baf36.yottaa.net/v~13.1aa/is/image/im8/322878_1_1?resmode=4&op_usm=1,1,1,&qlt=80,1&hei=500&wid=500&align=0,1&yocs=2M_2N_&yoloc=us', 
            itemPrice: 269
         },
        {
            itemName: 'Blender',
            itemImage: 'http://s7d9.scene7.com/is/image/JCPenney/DP0122201523481446M.tif?hei=380&wid=380&op_usm=.4,.8,0,0&resmode=sharp2',
            itemPrice: 250
        }
    ]
    
})

