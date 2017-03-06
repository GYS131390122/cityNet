//首页内容控制器
// app.controller('goodsCtr',function ($ionicViewSwitcher,$scope,goodsData,$ionicSlideBoxDelegate,$ionicPopup,$state,$rootScope,$ionicLoading,shopCounts,doRefresh) {
//     goodsData.getGoodslist().then(function (res) {
//         $scope.doRefresh = doRefresh.doRefresh($scope);
//         $scope.goods = res.goodsData;
//         $scope.banners = res.bannerData;
//         $ionicSlideBoxDelegate.update();
//         $ionicSlideBoxDelegate.loop(true);
//     })
// })
// //积分内容控制器
// app.controller('integralCtr',function ($scope,goodsData,$ionicSlideBoxDelegate) {
//     goodsData.getGoodslist().then(function (res) {
//         $scope.goods = res.goodsData;
//         $scope.banners = res.bannerData;
//         $ionicSlideBoxDelegate.update();
//         $ionicSlideBoxDelegate.loop(true);
//
//     })
// })
