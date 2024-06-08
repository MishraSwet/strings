export default function Home() {
    return <div className="grid grid-cols-3 h-full">
        <Navbar />
    </div>
}

import { HomeIcon,AlertIcon,MessageIcon,GroupsIcon,UserIcon,Logout } from "@/components/Icons/NavIcons"
function Navbar() {
    return <div className="flex flex-col justify-between h-full w-2/12 p-2">
        <div className="flex flex-col justify-between ">
            <HomeIcon />
            <AlertIcon />
            <MessageIcon />
            <GroupsIcon />
            <UserIcon />
        </div>
        <div className="flex flex-col ">
            <Logout/>
        </div>
    </div>
}