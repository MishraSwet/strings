//Alerts Api Route Go Here
import { WebSocketServer } from 'ws';
interface alert{
    uid: number;
    action: string;
}
const wss = new WebSocketServer({ newserver: true })

wss.on('connection', (ws) => {
    ws.on('alert', (alert:string) => {
        const data:alert = JSON.parse(alert);
        const uid = data.uid;
        const action = data.action;
    })
})
