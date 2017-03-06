app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('headerLine',{
            url: 'headerLine',
            templateUrl: 'js/temps/headerLine-content.html',
        })
        .state('rich',{
            url: 'rich',
            templateUrl: 'js/temps/rich-content.html',
        })
        .state('bee',{
            url: 'bee',
            templateUrl: 'js/temps/bee-content.html',
        })
        .state('video',{
            url: 'video',
            templateUrl: 'js/temps/video-content.html',
        })

        .state('mine',{
            url: 'mine',
            templateUrl: 'js/temps/mine-content.html',
        })

        .state('mine-content-goods',{
        url:'/mine-content-goods',
        views:{
            '@':{
                templateUrl:'js/temps/mine-content-goods.html',

            }
        }

        });

    $urlRouterProvider.otherwise('headerLine');
}]);