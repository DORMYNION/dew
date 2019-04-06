		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "7.368117", "longitude":"3.837157", "icon": "img/map-marker.png"}
			]
		};
		
		//set up map options
		$("#map_contact").mapmarker({
			zoom	: 14,
			center	: 'DEW',
			markers	: myMarkers
		});

});