//Alerts Api Route Go Here
import { log } from 'console';
import { CloudCog } from 'lucide-react';
import { WebSocketServer } from 'ws';
interface alert{
    uid: number;
    action: string;
    content: string;
}
interface client{
    socket: WebSocket
    queue: string[]
}

const server = new WebSocketServer({ port:8080 })


server.on('connection', (ws: WebSocketServer) => {

    console.log("New Client LOL")
    ws.on('identify', (clientid: number) => { 
        //if client not found
        {
            //create new client and add to socket
            const clientid = {
                socket: ws,
                queue:[]
            }
        }

    })
    ws.on('alert', (alert:string) => {
        const data:alert = JSON.parse(alert);
        const uid = data.uid;
        const action = data.action;
        const content = data.content;
        const message = uid + "" + action + "Your" + content
    })
    ws.on('close', () => {
        console.log("Disconnected")
    })
})

