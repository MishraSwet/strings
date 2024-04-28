import Post from "../components/Post";
export default function page() {

    return <div className="flex flex-col">
    <Post username="User" title="Post1" tags="friend 1,friend 2" />
    <Post username="User" title="Post1" tags="friend 1,friend 2" />
    <Post username="User" title="Post1" tags="friend 1,friend 2" />
    <Post username="User" title="Post1" tags="friend 1,friend 2" />
</div>
}