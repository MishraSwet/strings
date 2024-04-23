import HeartIcon from "./Icons/HeartIcon"
import CommentIcon from "./Icons/CommentIcon"
import BookmarkIcon from "./Icons/BookmarkIcon"
import ShareIcon from "./Icons/ShareIcon"

interface props{
    username:string,
    title: string,
    tags?: string,
    location?:string,
    img?: string,
    likes?: number,
    comments?: number
}

export default function Post({username,title,img,tags,location,likes,comments}:props) {
    return <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-1/2 m-auto my-2 border-2 border-red-200 p-2 max-w-[48rem] justify-between ">
        <div
            className="relative w-5/12 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="card-image" className="object-cover w-full h-full" />
        </div>
        <div className="p-6 border-2 border-red-200 w-6/12">
            <h6
                className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                {username}
            </h6>
            <h4 className="block mb-4 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {title}
            </h4>
            <p className="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                <span>Along With </span>
                {tags}
            </p>
        </div>
        <div className="flex flex-col border-2 border-red-200 w-1/12 items-end ">
            <HeartIcon num={69} />
            <CommentIcon num={33} />
            <ShareIcon num={12} />
            <BookmarkIcon num={7} />
        </div>
    </div>
}