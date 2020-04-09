function createCtrl($http, $location) {
    let vm = this;
    vm.error = '';
    vm.title = "Добавление";


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
            value: ''
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
        let p1 = $http.post('/api/citiesworld', {
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
    }




}
