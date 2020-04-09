function listCtrl($http, $location, $rootScope) {


    let vm = this;
    vm.title = "Список городов";

    //console.log('waiting...');
    let p1 = $http.get('/api/citiesworld', {
        headers : {
            token: localStorage.getItem('token')
        }
    });

    //

    p1.then(res=>{
        vm.list = res.data;
    }, err=>{
        $location.path('/login');
        //vm.list = [];
        //console.log('error!', err);
    });


  //  localStorage.setItem('test', 'ok');

    vm.test = localStorage.getItem('test');

}
