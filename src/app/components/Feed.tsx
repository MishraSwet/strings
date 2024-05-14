import Post from "./Post"

export default function Feed() {
    return <div className="flex flex-col w-full">
        <Post username="User" title="Post1" tags="friend 1,friend 2" />
        <Post username="User" title="Post1" tags="friend 1,friend 2" />
        <Post username="User" title="Post1" tags="friend 1,friend 2" />
        <Post username="User" title="Post1" tags="friend 1,friend 2" />
    </div>
}