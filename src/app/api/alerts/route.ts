//Alerts Api Route Go Here
import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ newserver: true })

wss.on('connection', (ws) => {
    ws.on('alert', (alert) => {
        //Store Alert
    })
})
