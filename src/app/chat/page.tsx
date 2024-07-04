import {useState,useEffect} from 'react'
export default function Chat() {
    return <div>
        <ChatCard />
        <ChatBar />
    </div>
}

export function ChatCard() {
    return <div>
        ...
    </div>
}

export function ChatBar() {
    return <div>
        ...
    </div>
}

export function ChatEngine() {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3000');
        setSocket(socket);

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            alert(data.message);
        };

        // Register the user on WebSocket server connection
        socket.onopen = () => {
            socket.send(JSON.stringify({ type: 'register', userId: 1 })); // Change this userId as needed
        };

        return () => {
            socket.close();
        };
    }, []);
}