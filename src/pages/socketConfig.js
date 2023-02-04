

        const ws = new WebSocket('ws://192.168.50.150:8000/ws');

            ws.onopen = () => {
        console.log('WebSocket connected');
        // setSocket(ws);
      };
        // const socket = openSocket("http://localhost:6600");

export default ws;