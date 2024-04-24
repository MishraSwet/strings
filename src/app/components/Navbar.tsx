import User from "../user/page"
import { HomeIcon,AlertIcon,MessageIcon,UserIcon,GroupsIcon,Logout } from "./Icons/NavIcons"

export default function Navbar() {
    return <div className="w-1/12 flex flex-col border-2 border-red-200 h-screen justify-between">
        <div className=" flex flex-col mx-auto gap-y-10 p-2 mt-4">
            <HomeIcon />
            <AlertIcon />
            <MessageIcon />
            <UserIcon />
            <GroupsIcon />
        </div>
        <div className=" m-auto p-2">
            <Logout />
        </div>
    </div>
}