export default function Home() {
    return <div className="grid grid-cols-3 h-full justify-items-stretch">
        <Navbar />
        <Feed />
        <SideBar />
    </div>
}


import { HomeIcon,AlertIcon,MessageIcon,GroupsIcon,UserIcon,Logout } from "@/components/Icons/NavIcons"
function Navbar() {
    return <div className="flex flex-col justify-between h-full w-2/12 p-2 border-2">
        <div className="flex flex-col justify-between ">
            <HomeIcon/>
            <AlertIcon/>
            <MessageIcon/>
            <GroupsIcon/>
            <UserIcon/>
        </div>
        <div className="flex flex-col ">
            <Logout/>
        </div>
    </div>
}

function Feed() {
    return <div className="flex flex-col h-full justify-between border-2 w-8/12">
        Feed
    </div>
}

function SideBar() {
    return <div className="flex flex-col h-full justify-between items-center w-2/12 border-2">Sidebar</div>
}