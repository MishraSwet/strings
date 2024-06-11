export default function Home() {
    return <div className="grid grid-cols-12 justify-center gap-4 h-full">
        <Navbar />
        <Feed />
        <SideBar />
    </div>
}


import { HomeIcon,AlertIcon,MessageIcon,GroupsIcon,UserIcon,Logout } from "@/components/Icons/NavIcons"
function Navbar() {
    return <div className="flex flex-col justify-between h-full col-span-1 p-2 border-2">
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
    return <div className="flex flex-col h-full justify-between border-2 col-span-8">
        Feed
    </div>
}

function SideBar() {
    return <div className="flex flex-col h-full justify-between items-center col-span-3 min-w-full border-2">Sidebar</div>
}