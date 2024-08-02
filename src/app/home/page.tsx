export default function Home() {
    return <div className="grid grid-cols-12 lg:grid-cols-12 justify-center h-full">
        <Navbar />
        <Feed />
        <SideBar />
    </div>
}


import { HomeIcon,AlertIcon,MessageIcon,GroupsIcon,UserIcon,Logout } from "@/components/Icons/NavIcons"
function Navbar() {
    return <div className="flex flex-col justify-between h-full col-span-2 lg:col-span-1 p-2 border-2">
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
    return <div className="flex flex-col h-full border-2 col-span-10 
    lg:col-span-8 ">
        <Header />
        <NewPost />
        <PostCard />
    </div>
}

function SideBar() {
    return <div className="flex-col h-full justify-between items-center col-span-3 border-2 hidden lg:flex">Sidebar</div>
}

function PostCard() {
    return <div className="w-full md:w-10/12 lg:mx-auto h-1/3 border-2 flex justify-around my-2">
        <div className="flex w-4/12 border-2 my-3">Img</div>
        <div className="flex flex-col w-6/12 border-2 my-2 justify-between">
            <div className="border-2 h-4/5">Content</div>
            <div className="border-2 h-1/5">Buttons</div>
        </div>
    </div>
}

function Header() {
    return <div className="w-full border-2 h-[64px] mb-2">Strings</div>
}

function NewPost() {
    return <div className="w-full md:w-10/12 lg:mx-auto h-1/3 border-2 flex justify-around my-2">
        <div className="flex w-4/12 border-2 my-3">+</div>
        <div className="flex flex-col w-6/12 border-2 my-2 justify-between">
            <div className="border-2 h-4/5">Content</div>
            <button className="border-2 h-1/5 bg-green-700 text-white">CREATE</button>
        </div>
    </div>
}

function AlertCard() {
    return <div className="w-full md:w-9/12 lg:8/12 flex items-center justify-center">
        <div></div>
        <div></div>
    </div>
}

function AlertHandler() {
    return <div>Alert Handler</div>
}