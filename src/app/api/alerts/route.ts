//Alerts Api Route Go Here
import { WebSocketServer } from 'ws';
interface alert{
    uid: number;
    message: string;
}
const wss = new WebSocketServer({ newserver: true })

wss.on('connection', (ws) => {
    ws.on('alert', (alert:alert) => {
        const data = JSON.parse(alert);
        const uid = data.uid;
        const message = data.message;
    })
})
