//Alerts Api Route Go Here
import { WebSocketServer } from 'ws';
interface alert{
    uid: number;
    action: string;
    content: string;
}
const wss = new WebSocketServer({ port:8080 })


wss.on('connection', (ws: WebSocketServer) => {
    console.log("New Client LOL")
    ws.on('alert', (alert:string) => {
        const data:alert = JSON.parse(alert);
        const uid = data.uid;
        const action = data.action;
        const content = data.content;
        const message = uid + "" + action + "Your" + content
    })
})
