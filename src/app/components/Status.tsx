import Avatar from "./Avatar";
import ImageIcon from "./Icons/ImageIcon"
import EmojiIcon from "./Icons/EmojiIcon"
import LocationIcon from "./Icons/LocationIcon"
import BtnForm from "./BtnForm";

export default function Status() {
    return <div className="flex flex-col w-1/2 m-auto border-2 border-red-200 p-2 my-2">
        <div className="flex justify between h-16 items-center">
            <Avatar label="X"/>
            <input className="border-none w-full" type="text" placeholder="what's happening ?"/>
        </div>
        <div className="flex mt-2 justify-between">
            <div className="flex justify-between">
            <ImageIcon />
            <LocationIcon />
            <EmojiIcon />
            </div>
            <BtnForm content="POST"/>
        </div>
        
    </div>
}