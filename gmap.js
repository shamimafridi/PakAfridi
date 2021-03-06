var mapstyle =
    [
        {
            featureType: "road",
            elementType: "all",
            stylers: [
                { hue: "#00ddff" },
                { saturation: -100 },
                { invert_lightness: false },
                { lightness: -35 }
            ]
        },{
            featureType: "landscape",
            elementType: "all",
            stylers: [
                { hue: "#bababa" },
                { saturation: -99 },
                { lightness: -25 },
                { visibility: "off" }
            ]
        },{
            featureType: "poi",
            elementType: "all",
            stylers: [
                { invert_lightness: true },
                { hue: "#004cff" },
                { saturation: -100 },
                { lightness: 52 }
            ]
        },{
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [
              { visibility: "off" }
            ]
        }
    ]

function initialize() {


    // set the map center and your position
    var mapCenter = new google.maps.LatLng(24.8214393,67.0014365);
    var myPosition = new google.maps.LatLng(24.816737, 67.009777);
    

    // set the content displayed when map marker clicked
    var infoContent = '<div><h4>Pak Afridi Enterprises</h4><p>Replace with your company info.</p></div>';

    // map marker image
    var myImage = new google.maps.MarkerImage('images/map-merker.png');


    var mapOptions = {
        zoom: 17, // map zoom level
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapCenter,
        scrollwheel: false, // toggle between true or false for scrollwheel
    }

    map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

    // var mapType = new google.maps.StyledMapType(mapstyle, { name:"Grayscale" });
    //     map.mapTypes.set('tehgrayz', mapType);
    //     map.setMapTypeId('tehgrayz');


    var companyMarker = new google.maps.Marker({
            position: myPosition,
            map: map,
           // icon: myImage,
            title:"Pak Afridi Enterprises",
            zIndex: 3
        });

    var infowindow = new google.maps.InfoWindow({
      content: infoContent
    });

    companyMarker.addListener('click', function() {
        infowindow.open(map, companyMarker);
    });

}

initialize();
