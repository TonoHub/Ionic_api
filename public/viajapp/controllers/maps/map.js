angular.module('ControllersModule')
    .controller(
        'MapCtrl',
        ['GoogleMapsService', '$scope', function (GoogleMapsService, $scope) {

            $scope.map     = GoogleMapsService.init('map_container', 41.3098385,1.9972236);
            $scope.address = '';

            $scope.addCurrentLocation = function () {
                GoogleMapsService.createByCurrentLocation(function (markerData) {
                    markerData.options.labelContent = 'Esta es su ubicacion';
                    var marker =new google.maps.Marker(markerData);
                    marker.setMap($scope.map);
                    //$scope.map.markers.push(marker);
                    console.log("map", $scope.map);
                    refresh(markerData);
                });
            };
            // añadir dirección actual
            $scope.addAddress         = function () {
                var address = $scope.address;
                if (address !== '') {
                    GoogleMapsService.createByAddress(address, function (markerData) {
                        markerData.options.labelContent = 'Esta es su ubicacion';
                        var marker =new google.maps.Marker(markerData);
                        marker.setMap($scope.map);
                        //$scope.map.markers.push(marker);  
                        console.log("map", $scope.map);
                        refresh(markerData);
                    });
                }
            };

            console.log('asd', $scope);

            function refresh(marker) {
                console.log(marker);
                $scope.map.setCenter({
                    lat : marker.position.lat,
                    lng: marker.position.lng
                });


            }

        }]);

