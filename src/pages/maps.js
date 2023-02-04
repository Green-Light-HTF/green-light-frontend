import React, { useState, useEffect } from 'react';

const BingMap = () => {
    const [map, setMap] = useState(null);
    const [waypoints, setWaypoints] = useState({
        address: 'Karnavati University',
        location: new window.Microsoft.Maps.Location(23.129220, 72.540530)
      });
  
    useEffect(() => {
      const loadMapScenario = () => {
        const mapInstance = new window.Microsoft.Maps.Map(document.getElementById('myMap'), {
          center: new window.Microsoft.Maps.Location(47.606209, -122.332071),
          zoom: 12,
        });
        setMap(mapInstance);
  
        // Define a function to be called after the Bing Maps API has loaded
        function initMap() {
          const directionsManager = new window.Microsoft.Maps.Directions.DirectionsManager(mapInstance);
          directionsManager.setRequestOptions({ routeMode: window.Microsoft.Maps.Directions.RouteMode.driving });
  
          const waypoint1 = new window.Microsoft.Maps.Directions.Waypoint({ location: new window.Microsoft.Maps.Location(waypoints[0].lat, waypoints[0].lng) });
          const waypoint2 = new window.Microsoft.Maps.Directions.Waypoint({ location: new window.Microsoft.Maps.Location(waypoints[1].lat, waypoints[1].lng) });
          directionsManager.addWaypoint(waypoint1);
          directionsManager.addWaypoint(waypoint2);
          directionsManager.calculateDirections();
  
          directionsManager.addRenderCompleteListener(function (e) {
            // Add an overlay on top of the route
            const overlay = new window.Microsoft.Maps.Polyline([e.routeSummary[1].route.shape], {
              strokeColor: 'blue',
              strokeThickness: 5,
            });
            mapInstance.entities.push(overlay);
          });
        }
  
        window.Microsoft.Maps.loadModule('Microsoft.Maps.Directions', initMap);
      };
  
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://www.bing.com/api/maps/mapcontrol?key=AjPGihUegNVzAbd_Fe78htn--29QxOLn2i5_EJp2BaJbXvSGC-GzSHceIDm28quR&callback=loadMapScenario';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
  
      window.loadMapScenario = loadMapScenario;
    }, []);
  
    // const moveWaypoint = () => {
    //     // Update the location of the waypoint
    //     setWaypoints({
    //       location: new window.Microsoft.Maps.Location(23.129220 + Math.random() * 0.1, 72.540530 + Math.random() * 0.1)
    //     });
    //   };
      
    const moveWaypoint = () => {
        // Update the location of the waypoint
        setWaypoints({
          address: 'Karnavati University',
          location: new window.Microsoft.Maps.Location(23.129220 + Math.random() * 0.1, 72.540530 + Math.random() * 0.1)
        });
      };
  return (
    <div>
      <div id="myMap" style={{ width: '100vw', height: '100vh' }}></div>
      <button onClick={moveWaypoint}>Move waypoint</button>
    </div>
  );
};

export default BingMap;
