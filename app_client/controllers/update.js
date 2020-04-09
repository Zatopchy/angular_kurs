function updateCtrl($http, $location, $routeParams) {
    let vm = this;
    vm.error = '';
    vm.title = "Изменение";
    const id = $routeParams.id;


    vm.formWasValidated = false;

    vm.formModel = {
        city: {
            valid: true,
            infoText: '',
            value: ''
        },
        country: {
            valid: true,
            infoText: '',
            value: ''
        },
        population: {
            valid: true,
            infoText: '',
            value: ''
        },
        territory: {
            valid: true,
            infoText: '',
            value: ''
        },
        dateFinish: {
            valid: true,
            infoText: '',
            value: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000)
        },
        statcity: {
            valid: true,
            infoText: '',
            value: ''
        }
    };

    vm.validate = function () {

        vm.formWasValidated = true;
        const onlyLettersAndDigits = /^([-\.a-zа-яё \d]+)$/i;
        const onlynum = /^[0-9]*$/i;
        for (let field in vm.formModel){
            if(field!=='dateFinish' && field!=='statcity'){
                vm.formModel[field].valid = onlyLettersAndDigits.test(vm.formModel[field].value);
                vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только буквы и цифры';
                vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
                if(field == 'population' || field == 'territory'){
                    vm.formModel[field].valid = onlynum.test(vm.formModel[field].value);
                    vm.formModel[field].infoText = (vm.formModel[field].valid) ? 'Введено верно' : 'Допускаются только цифры';
                    vm.formWasValidated = vm.formWasValidated && vm.formModel[field].valid;
                }
            }
        }
    };

    vm.sendForm = function () {

        vm.error = '';
        console.log('waiting...');
        let p1 = $http.put('/api/citiesworld/' + id, {
            city: vm.formModel.city.value,
            country: vm.formModel.country.value,
            population: vm.formModel.population.value,
            territory: vm.formModel.territory.value,
            dateFinish: vm.formModel.dateFinish.value,
            statcity: vm.formModel.statcity.value
        }, {
            headers : {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res=>{
            console.log('success!');
            $location.path('/');
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add cities: ', err);
        });
    };

    function init() {

        vm.error = '';
        console.log('waiting...');


        let p1 = $http.get('/api/citiesworld/' + id, {
            headers : {
                token: localStorage.getItem('token')
            }
        });

        p1.then(res=>{
            //console.log('success!');
            const oneRow = res.data;
            vm.formModel.city.value = oneRow.city;
            vm.formModel.country.value = oneRow.country;
            vm.formModel.population.value = oneRow.population;
            vm.formModel.territory.value = oneRow.territory;
            vm.formModel.dateFinish.value = new Date(oneRow.dateFinish);
            vm.formModel.statcity.value = oneRow.statcity;
            vm.validate();
        }, err=>{
            vm.error = 'Ошибка: ' + JSON.stringify(err);
            //console.log('error add cities: ', err);
        });
    }

    init();


}
