angular.module('pet-detective')
  .factory('formDataFactory', function ($http) {
    return {
      fetchFormData() {
        return $http({
          url: '/bulletin',
          method: 'GET',
        })
          .then((response) => {
            console.log(response.data, 'form data');
            return response.data;
          },
          (err) => { // optional
            console.error(err);
          });
      },
    };
  })
  .controller('formDataController', function (formDataFactory) {
    this.data = formDataFactory.fetchFormData();
    console.log(this.data, 'data from form factory');
  })
  .directive('fetchFormData', function fetchFormDataDirective() {
    return {
      scope: {
      },
      restrict: 'E',
      controller: 'formDataController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/fetchFormData.html',
    };
  });
