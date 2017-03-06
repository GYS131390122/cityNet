var HOST = "http://121.43.101.148:8901/forward-service/api";
app.service("mineServe",function ($http) {
    //下拉刷新服务
    var url = HOST + ""
    this.personMsg = function () {

        return $http({
            url:url,
            method:'post',
            data: {
                code: "805043",
                json: {
                    "loginName": "admin",
                    "loginPwd": "888888",
                    "kind": "01",
                    "systemCode": "CD-CLW000005"
                }
            }
        }).then(function (res) {
            console.log(res);
            return res.data;


        })
    }
})