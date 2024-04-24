import User from "../user/page"
import { HomeIcon,AlertIcon,MessageIcon,UserIcon,GroupsIcon,Logout } from "./Icons/NavIcons"

export default function Navbar() {
    return <div className="w-3/12 flex flex-col justify-around border-2 border-red-200">
        <div className="flex flex-col">
            <HomeIcon />
            <AlertIcon />
            <MessageIcon />
            <UserIcon />
            <GroupsIcon />
        </div>
        <div>
            <Logout />
        </div>
    </div>
}