import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function signin() {
    return <div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input className="mb-2" type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input className="mb-2" type="password" id="password" placeholder="Password" />
        </div>
        <Button>signin</Button>
    </div>
}