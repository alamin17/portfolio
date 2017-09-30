
//Customized By Al-amin(Front-End-Developer/Wordpress Theme Developer): http://facebook.com/alaminjs Or alamin215950@gmail.com


 function initMap() {

        // Create a new StyledMapType object, passing it an array of styles,
        // and the name to be displayed on the map type control.
        var styledMapType = new google.maps.StyledMapType(
			[
			  {
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
				  {
					"color": "#8dc347"
				  }
				]
			  }
			],
            {name: 'Styled Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.
		
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 27.627912, lng: 88.633176},
          zoom: 5,
		  scrollwheel: false,
		   icon: 'assets/images/home_01/map-icon.png',
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
		  
        });
		
	var myLatlng = new google.maps.LatLng(24.627912, 89.633176);		
	var marker = new google.maps.Marker({
		position: myLatlng,
		icon: "assets/images/home_01/map-icon.png",
		title:"MoonLight Map"
	});	
	marker.setMap(map);		

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
		
		
	
		
		
		
		
		
}


