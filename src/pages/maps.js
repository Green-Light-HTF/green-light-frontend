import React, { useEffect, useState } from 'react';
import ws from "./socketConfig.js"
import Header from "./header.js";
import Footer from "./footer.js";

const BingMap = () => {
    const [data, setData] = useState(null);
    const [socket, setSocket] = useState(null);
    
    // const coordinates = [ [23.058254250939743, 72.51682393703403] ,
    //    [ 23.058436876861652, 72.51687422845268],
    //   [  23.058605929017958, 72.51691781434901],
    //     [23.05877251305084, 72.51696140024538],
    //    [ 23.058908865014043, 72.516997610067],
    //    [ 23.05911808704106, 72.51705052402419],
    //    [ 23.0592353124157, 72.51707332280064],
    //  [   23.05919089018048, 72.51727448847524],
    //   [  23.05910636449446, 72.51765200939477],
    //    [ 23.059023689685, 72.51800740208947],
    //    [ 23.05893854691919, 72.51840302791923],
    //    [ 23.058832426874737, 72.51886235621265],
    //     [23.058744199099337, 72.5192284777431],
    //     [23.058668310827713, 72.51959124651137],
    //     [23.058600778933073, 72.51984572143684],
    //    [ 23.05850082840889, 72.52022592456296],
    //    [ 23.05837990051441, 72.52019239695066],
    //     [23.058136810441336, 72.52012601227729],
    //     [23.057992436944986, 72.52008309693338],
    //    [ 23.05784868027138, 72.52004688711106],
    //     [23.05770677439557, 72.5200059834239],
    //    [ 23.057563017416765, 72.51996776194535],
    //    [ 23.057420494253826, 72.51992886991492],
    //    [ 23.057133596520323, 72.51984572143598],
    //   [  23.05684608118731, 72.51976994903127],
    //    [ 23.056559643976016, 72.51968446116213],
    //     [23.0562733613955, 72.51960131268235],
    //     [23.055845046558648, 72.51947608259073],
    //     [23.055703755558202, 72.51943450835128],
    //     [23.05541623717234, 72.51935135987168],
    //     [23.05498622414654, 72.5192290428297],
    //    [ 23.05469808722832, 72.51914321214142],
    //    [ 23.054271125185892, 72.51902050107952],
    //     [23.05369841062351, 72.51885427884137],
    //     [23.053419472252397, 72.51877229370183],
    //     [23.05309060975501, 72.51852955378631],
    //     [23.052712386040945, 72.51839477278354],
    //    [ 23.052192249574954, 72.51823316969075],
    //     [23.051789688480948, 72.51811009319495],
    //    [ 23.051310965599345, 72.5179408611521],
    //    [ 23.050562563501302, 72.51766815355256],
    //    [ 23.04966626428615, 72.51728799960104],
    //    [ 23.049193626704874, 72.51708616337223],
    //     [23.048647385311956, 72.51684808895553],
    //    [ 23.047754601827513, 72.51642693665671],
    //     [23.0473014836236, 72.5162015747699],
    //     [23.04649557836107, 72.51581631258523],
    //     [23.04609101392538, 72.51561524857544],
    //    [ 23.04530335435288, 72.51521945983853],
    //    [ 23.04386767253031, 72.51451694395264],
    //    [ 23.04278602665753, 72.51401221263801],
    //    [ 23.04172134380935, 72.5134821679796],
    //   [  23.040657726920333, 72.51294395082768],
    //    [ 23.039542084053704, 72.5123936724405],
    //     [23.03846450170867, 72.5118670663851],
    //    [ 23.0376834235571, 72.51147478663809],
    //    [ 23.03692847192831, 72.51111728750492],
    //    [ 23.035989190689047, 72.51066384723458],
    //     [23.034783706285562, 72.51006842261859],
    //     [23.033196060928187, 72.5093786596816],
    //     [23.031653178885048, 72.50886029001633],
    //     [23.030475743809887, 72.50863618075998],
    //    [ 23.027362799886745, 72.50763135434995],
    //    [ 23.027195585493104, 72.50717031133802],
    //    [ 23.027354439165432, 72.50720210740766],
    //   [  23.028406770312802, 72.50756473747558],
    //    [ 23.029826777899025, 72.50803357712968],
    //    [ 23.031241896337967, 72.50850221258123],
    //    [ 23.031970676815163, 72.50883485712518],
    //    [ 23.033178022137093, 72.50920531271308],
    //    [ 23.033593064877195, 72.50920876503999],
    //   [  23.034150844910908, 72.50942678207106]];
    //   const [map, setMap] = useState(null);
    //   const [index, setIndex] = useState(0);
    const [lat, setLat] = useState(23.058254250939743)
    const [lng, setLng] = useState(72.51682393703403)
    const [map, setMap] = useState(null);

      

      useEffect(() => {
        console.log("effefger")

        
        // const ws = new WebSocket('ws://192.168.50.150:8000/ws');
    
        // ws.onopen = () => {
        //   console.log('WebSocket connected');
        //   setSocket(ws);
        // };
    
        ws.onmessage = (event) => {
            console.log(event)
            const data = JSON.parse(event.data)
            setLat(data.current_lat)
            setLng(data.current_lng)
            console.log(data)
            // setLat(event.)
          setData(event.data);
        };
    
        // ws.onerror = (error) => {
        //   console.error('WebSocket error:', error);
        // };
    
        // ws.onclose = (event) => {
        //   console.log('WebSocket closed:', event);
        // };
    
        // return () => {
        //   if (socket) {
        //     socket.close();
        //   }
        // };
      }, []);
      

      useEffect(() => {
        const loadMapScenario = () => {
          const mapInstance = new window.Microsoft.Maps.Map(document.getElementById('myMap'), {
            center: new window.Microsoft.Maps.Location(23.034150844910908, 72.50942678207106),
            zoom: 14,
          });
          setMap(mapInstance);
      
          var loc = new window.Microsoft.Maps.Location(23.034150844910908, 72.50942678207106)
          mapInstance.setView(loc)
          window.Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
            const directionsManager = new window.Microsoft.Maps.Directions.DirectionsManager(mapInstance);
            directionsManager.setRequestOptions({ routeMode: window.Microsoft.Maps.Directions.RouteMode.driving });
      
            const waypoint1 = new window.Microsoft.Maps.Directions.Waypoint({ address: 'Ambulance', location: new window.Microsoft.Maps.Location(lat, lng)});
            const waypoint2 = new window.Microsoft.Maps.Directions.Waypoint({ address: 'Patient', location: new window.Microsoft.Maps.Location(23.034150844910908, 72.50942678207106) });
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
          });
        };
      
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.bing.com/api/maps/mapcontrol?key=AjPGihUegNVzAbd_Fe78htn--29QxOLn2i5_EJp2BaJbXvSGC-GzSHceIDm28quR&callback=loadMapScenario';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      
        window.loadMapScenario = loadMapScenario;
      }, [lat, lng]);
      
    //   const moveWaypoint = () => {
    //     console.log("dfdsf")
    //     setIndex((index + 1));
    //     console.log("dscc")
    //   };
      
      return (
        <div>
            <div>
                <Header/>
            </div>
            {/* <button onClick={moveWaypoint}>Move Waypoint</button> */}
            <div id="printoutPanel"></div>
            <div id="myMap" style={{ width: '100vw', height: '80vh' }}></div>

            <div>
                <Footer/>
            </div>
        </div>
      );
      
};

export default BingMap;

// import React, { useState, useEffect } from "react";

//  const BingMap = () => {
//   const [map, setMap] = useState(null);
//   const [watchId, setWatchId] = useState(null);
//   const [userPin, setUserPin] = useState(null);
//   const [directionsManager, setDirectionsManager] = useState(null);
//   const [routePath, setRoutePath] = useState(null);

//   useEffect(() => {
//     window.Microsoft.Maps.loadModule(["Microsoft.Maps.Directions"], () => {
//       const manager = new window.Microsoft.Maps.Directions.DirectionsManager(
//         map
//       );
//       manager.setRequestOptions({
//         distanceUnit: window.Microsoft.Maps.Directions.DistanceUnit.km,
//         routeAvoidance: [
//           window.Microsoft.Maps.Directions.RouteAvoidance.avoidLimitedAccessHighway,
//         ],
//       });
//       manager.setRenderOptions({
//         drivingPolylineOptions: {
//           strokeColor: "green",
//           strokeThickness: 6,
//         },
//       });
//       window.Microsoft.Maps.Events.addHandler(
//         manager,
//         "directionsUpdated",
//         directionsUpdated
//       );
//       setDirectionsManager(manager);

//       const script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = 'https://www.bing.com/api/maps/mapcontrol?key=AjPGihUegNVzAbd_Fe78htn--29QxOLn2i5_EJp2BaJbXvSGC-GzSHceIDm28quR&callback=loadMapScenario';
//         script.async = true;
//         script.defer = true;
//         document.body.appendChild(script);
      
//         // window.loadMapScenario = loadMapScenario;

//     });
//   }, [map]);

//   const startTracking = () => {
//     const userLocation = map.getCenter();
//     setUserPin(
//       new window.Microsoft.Maps.Pushpin(userLocation, { visible: false })
//     );
//     map.entities.push(userPin);
//     setWatchId(
//       navigator.geolocation.watchPosition(usersLocationUpdated)
//     );
//   };

//   const usersLocationUpdated = (position) => {
//     const loc = new window.Microsoft.Maps.Location(
//       position.coords.latitude,
//       position.coords.longitude
//     );
//     userPin.setLocation(loc);
//     userPin.setOptions({ visible: true });
//     map.setView({ center: loc });
//     if (!routePath || window.Microsoft.Maps.SpatialMath.distance(loc, routePath) > 50) {
//       calculateRoute(loc, document.getElementById("detinationTbx").value);
//     }
//   };

//   const stopTracking = () => {
//     navigator.geolocation.clearWatch(watchId);
//     map.entities.clear();
//     clearDirections();
//   };

//   const calculateRoute = (userLocation, destination) => {
//     clearDirections();
//     directionsManager.addWaypoint(
//       new window.Microsoft.Maps.Directions.Waypoint({ location: userLocation })
//     );
//     directionsManager.addWaypoint(
//       new window.Microsoft.Maps.Directions.Waypoint({ address: destination })
//     );
//     directionsManager.calculateDirections();
//   };

//   const directionsUpdated = (e) => {
//     const route = directionsManager.getCurrentRoute();
//     if (route && route.routePath && route.routePath.length > 0) {
//       setRoutePath(new window.Microsoft.Maps.Polyline(route.routePath));
//         }
//     }

//     const clearDirections = () =>  {
//         //Clear directions waypoints and display without clearing it's options.
//         directionsManager.clearDisplay();

//         var wp = directionsManager.getAllWaypoints();
//         if (wp && wp.length > 0) {
//             for (var i = wp.length - 1; i >= 0; i--) {
//                 this.directionsManager.removeWaypoint(wp[i]);
//             }
//         }

//         routePath = null;
//     }

//     return (
//         <>
//         <div id="myMap" style="position:relative;width:600px;height:600px;"></div>
//     <br />
//     Destination: <input type="text" id="detinationTbx" value="1 Microsoft Way, Redmond, WA" />
//     <br />
//     <br />
//     {/* <input type="button" value="Start Continuous Tracking" onclick="startTracking()" />
//     <input type="button" value="Stop Continuous Tracking" onclick="stopTracking()" /> */}
    
//     {/* <fieldset style="width:800px;margin-top:10px;">
//         <legend>Continuous Tracking and Routing Sample</legend>
//         This sample shows how to use the browsers geolocation API to continuous track a users position and their route to a destination on the map.
//     </fieldset> */}
//     </>
//     )
// }

// export default BingMap