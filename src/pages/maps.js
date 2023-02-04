// import React, { useEffect, useState } from 'react';
// // import { io } from "socket.io-client";
// // import io from 'socket.io-client';
// // import {W3CWebSocket} from 'websocket'

// const BingMap = () => {

// // const socket = new WebSocket('ws://192.168.50.150:8000/ws');
// const [socket, setSocket] = useState(null);

// useEffect(() => {
//   const webSocket = new WebSocket('ws://192.168.50.150:8000/ws');
//   setSocket(webSocket);
//   webSocket.onopen = () => {
//     console.log('WebSocket connected.');
//   };
//   webSocket.onmessage = (event) => {
//     console.log('Message received: ', event.data);
//   };
//   webSocket.onclose = () => {
//     console.log('WebSocket disconnected.');
//   };

//   return () => {
//     console.log("fdsfhbhds")
//     // webSocket.close();
//   };
// }, []);


// // useEffect(() => {
// //     const webSocket = new WebSocket('ws://192.168.50.150:8000/ws');
// //     setSocket(webSocket);
// //     webSocket.onopen = () => {
// //       console.log('WebSocket connected.');
// //     };
// //     webSocket.onmessage = (event) => {
// //       console.log('Message received: ', event.data);
// //     };
// //     webSocket.onclose = () => {
// //       console.log('WebSocket disconnected.');
// //     };
// //   }, []);

// //   useEffect(() => {
// //     return () => {
// //       if (socket) {
// //         socket.close();
// //       }
// //     };
// //   }, [socket]);
//     // const coordinates = [ [23.129220, 72.540530],
//     // [23.130966, 72.540977],
//     // [23.131491, 72.541168],
//     // [23.132195, 72.541357],
//     // [23.132495, 72.541478],
//     // [23.133587, 72.541685],
//     // [23.134249, 72.541858],
//     // [23.135288, 72.542131],
//     // [23.136281, 72.542342],
//     // [23.136372, 72.542628],
//     // [23.136246, 72.543248],
//     // [23.136134, 72.544112],
//     // [23.136145, 72.544605],
//     // [23.136024, 72.545518],
//     // [23.135991, 72.545707],
//     // [23.135904, 72.545991],
//     // [23.135839, 72.546440],
//     // [23.135719, 72.546665],
//     // [23.135643, 72.547150],
//     //  [23.112650, 72.583620]];
//     //   const [map, setMap] = useState(null);
//     //   const [index, setIndex] = useState(0);

//     //   useEffect(() => {
//     //     const loadMapScenario = () => {
//     //       const mapInstance = new window.Microsoft.Maps.Map(document.getElementById('myMap'), {
//     //         center: new window.Microsoft.Maps.Location(coordinates[19][0], coordinates[19][1]),
//     //         zoom: 11,
//     //       });
//     //       setMap(mapInstance);

//     //       window.Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
//     //         const directionsManager = new window.Microsoft.Maps.Directions.DirectionsManager(mapInstance);
//     //         directionsManager.setRequestOptions({ routeMode: window.Microsoft.Maps.Directions.RouteMode.driving });

//     //         const waypoint1 = new window.Microsoft.Maps.Directions.Waypoint({ address: 'Karnavati Univesity', location: new window.Microsoft.Maps.Location(coordinates[index][0], coordinates[index][1]) });
//     //         const waypoint2 = new window.Microsoft.Maps.Directions.Waypoint({ address: 'VGEC', location: new window.Microsoft.Maps.Location(coordinates[19][0], coordinates[19][1]) });
//     //         directionsManager.addWaypoint(waypoint1);
//     //         directionsManager.addWaypoint(waypoint2);
//     //         directionsManager.calculateDirections();

//     //         directionsManager.addRenderCompleteListener(function (e) {
//     //           // Add an overlay on top of the route
//     //           const overlay = new window.Microsoft.Maps.Polyline([e.routeSummary[1].route.shape], {
//     //             strokeColor: 'blue',
//     //             strokeThickness: 5,
//     //           });
//     //           mapInstance.entities.push(overlay);
//     //         });
//     //       });
//     //     };

//     //     const script = document.createElement('script');
//     //     script.type = 'text/javascript';
//     //     script.src = 'https://www.bing.com/api/maps/mapcontrol?key=AjPGihUegNVzAbd_Fe78htn--29QxOLn2i5_EJp2BaJbXvSGC-GzSHceIDm28quR&callback=loadMapScenario';
//     //     script.async = true;
//     //     script.defer = true;
//     //     document.body.appendChild(script);

//     //     window.loadMapScenario = loadMapScenario;
//     //   }, [index]);

//     //   const moveWaypoint = () => {
//     //     console.log("dfdsf")
//     //     setIndex((index + 1));
//     //     console.log("dscc")
//     //   };

//     return (
//         // <div>
//         //   {/* <button onClick={moveWaypoint}>Move Waypoint</button> */}
//         //   <div id="printoutPanel"></div>
//         //   <div id="myMap" style={{ width: '100vw', height: '100vh' }}></div>
//         // </div>
//         <div>
//             {/* <h1>Data: {data}</h1> */}
//         </div>
//     );

// };

// export default BingMap;