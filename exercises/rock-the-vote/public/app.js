var app = angular.module('myApp', []);
app.controller('mainController', ['$scope', 'mainService', function ($scope, mainService) {
    mainService.get().then(function (response) {
        $scope.votes = response;
    })
    
    $scope.post = function (newPost) {
        mainService.post(newPost).then(function (response) {
            $scope.votes.push(response.data);
          return response.data;
        });
    }
    
    
    $scope.delete = function (item, $index) {
        mainService.delete(item).then(function (response) {
            $scope.votes.splice($index, 1);
            return response.data;
        })
    }
    $scope.upvote = function (item) {
        item['upvotes']++;
        item['totalVotes'] = item['downvotes'] + item['upvotes'];
        mainService.put(item).then(function (response) {
            console.log(item)
            return response.data
        })
    }
    $scope.downvote = function (item) {
        item['downvotes']++;
        item['totalVotes'] = item['downvotes'] + item['upvotes'];
        mainService.put(item).then(function (response) {
            console.log(item);
        })
    }
    $scope.put = function (newitem, item){
        item['userComments'].push(newitem);
        mainService.put(item).then(function(response){
            console.log(response);
        })
    }
    
    }]);
app.service('mainService', function ($http) {
    this.get = function () {
        return $http.get('/rockthevote').then(function (response) {
            return response.data;
        })
    }
    this.post = function (newPost) {
        return $http.post('/rockthevote', newPost).then(function (response) {
            return response.data;
        })
    }
    this.delete = function (item) {
        return $http.delete('/rockthevote/' + item._id).then(function (response) {
            return response.data;
            console.log('Your item was successfully deleted')
        })
    }
    this.put = function (item) {
        return $http.put('/rockthevote/' + item._id, item).then(function (response) {
            return response.data;
        })
    }
})
// app.directive('slideable', function () {
//         return {
//             restrict:'C',
//             compile: function (element, attr) {
//                 // wrap tag
//                 var contents = element.html();
//                 element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');
//
//                 return function postLink(scope, element, attrs) {
//                     // default properties
//                     attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
//                     attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
//                     element.css({
//                         'overflow': 'hidden',
//                         'height': '0px',
//                         'transitionProperty': 'height',
//                         'transitionDuration': attrs.duration,
//                         'transitionTimingFunction': attrs.easing
//                     });
//                 };
//             }
//         };
//     })
// app.directive('slideToggle', function() {
//         return {
//             restrict: 'A',
//             link: function(scope, element, attrs) {
//                 var target = document.querySelector(attrs.slideToggle);
//                 attrs.expanded = false;
//                 element.bind('click', function() {
//                     var content = target.querySelector('.slideable_content');
//                     if(!attrs.expanded) {
//                         content.style.border = '1px solid rgba(0,0,0,0)';
//                         var y = content.clientHeight;
//                         content.style.border = 0;
//                         target.style.height = y + 'px';
//                     } else {
//                         target.style.height = '0px';
//                     }
//                     attrs.expanded = !attrs.expanded;
//                 });
//             }
//         }
//     });


$(document).ready(function() {
    $(".toggle").slideUp();
    $(".trigger").click(function () {
        $(this).next(".toggle").slideToggle("slow");
    })
});
