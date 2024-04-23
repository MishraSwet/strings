import Post from "../components/Post";
import Status from "../components/Status";

export default function User() {
    return <div className="flex flex-col">
        <Status />
        <Post username="User" title="Post1" tags="friend 1,friend 2" />
        <Post username="User" title="Post1" tags="friend 1,friend 2" />
        <Post username="User" title="Post1" tags="friend 1,friend 2" />
        <Post username="User" title="Post1" tags="friend 1,friend 2" />
    </div>
}