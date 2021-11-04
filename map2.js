


function initMap() {
    const place = {  lat: 51.511053,lng: -0.096884 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: place,
      mapTypeId: 'hybrid'
    });
  
    // fn that calls add marker 
    google.maps.event.addListener(map, "click", (event) => {
      addMarker(event.latLng, map);
     

   





    });
    
    
    // 1st info window creation
    let infoWindow = new google.maps.InfoWindow({
      content: "3d map",
      position: place,
    });
  
    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      // Close current info window
      infoWindow.close();
      // info window creation
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)//print latandlng ,need to modify to address 
        
        
     );
      infoWindow.open(map);
    });
    
  }
  
  // Adds marker 
  function addMarker(location, map) {
    new google.maps.Marker({
      position: location,
      map: map,
      animation: google.maps.Animation.DROP,
     // icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
     //custom pointer
      icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png', //marker color 
          size: new google.maps.Size(50, 50),
          scaledSize: new google.maps.Size(50, 50),
          anchor: new google.maps.Point(0, 50)
         }
      
    });










  }
  
  
  