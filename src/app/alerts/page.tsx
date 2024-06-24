interface AlertProps{
    Logo: String,
    UserId: String | number,
    Text : String
}

export default function Alerts() {
    return <AlertCard />
}


export function AlertCard() { 
    return <div>
        <div>Logo</div>
        <div>User Action</div>
        <div>Text</div>
    </div>
}