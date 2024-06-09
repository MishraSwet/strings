"use client"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation"

interface navBtnProps{
    children: React.ReactNode
    path:string
}

export function NavBtn({ children, path }: navBtnProps) {
    const router = useRouter();
    return <Button variant="outline" className="p-1 border-0 w-16 rounded-full my-2" onClick={()=>router.push(path)}>{children}</Button>
} 