import { Button } from "./ui/button";

interface navBtnProps{
    children:React.ReactNode
}

export function NavBtn({ children }:navBtnProps) {
    return <Button variant="outline" className="p-1 border-0 w-16 rounded-full my-2">{children}</Button>
} 