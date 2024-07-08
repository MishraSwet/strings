import { WebSocketServer } from 'ws';

interface message{
    content: string,
    uid:number,
    target:number
}
const wss = new WebSocketServer({ port: 8081 });

wss.on('connection', function Connect(ws: WebSocketServer) {
    ws.on('message', function Message(data: string) {
        const message:message = JSON.parse(data);
        const content = message.content;
        const uid = message.uid;
        const target = message.target;
    }
})
