"use server"
import client from "@/db"

interface postprops{
    content: string,
    img?: string,
    author:any,
}
export function createPost({ content, img, author }: postprops) {
    return "createPost"
}

export function LikePost() {
    return "Post Liked"
}

export function BookmarkPost() {
    return "Post Bookmarked"
}