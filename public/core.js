angular.module('MainApp', [])

function mainController($scope, $http) {
    $scope.newPersona = {};
    $scope.personas = {};
    $scope.selected = false;

    // Obtenemos todos los datos de la base de datos
    $http.get('/users').success(function(data) {
        console.log(data);
            $scope.personas = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Función para registrar a una persona
    $scope.registrarPersona = function() {
        $http.post('/user', $scope.newPersona)
            .success(function(data) {
                $scope.newPersona = {}; // Borramos los datos del formulario
                $scope.personas = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


    // Función para editar los datos de una persona
    $scope.modificarPersona = function(newPersona) {
        $http.put('/user/update', $scope.newPersona)
            .success(function(data) {
                $scope.newPersona = {}; // Borramos los datos del formulario
                $scope.personas = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función que borra un objeto persona conocido su id
    $scope.borrarPersona = function(name) {
        if (confirm ("you want to delete de route? "))

        {
        console.log("borrar persona " + name);
        $http.delete('/user/delete/' + name)
            .success(function(data) {
                $scope.newPersona = {};
                $scope.personas = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });}
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectPerson = function(persona) {
        $scope.newPersona = persona;
        $scope.selected = true;
        console.log($scope.newPersona, $scope.selected);
    };

    $scope.verificar = function verificar(v){
        var p1 = document.getElementById('pass1');
        if( p1.value != v){
            document.getElementById('mensaje').innerHTML = "no coincide";

        }else{
            document.getElementById('mensaje').innerHTML = "ok";
            return true;
        }
    }
}