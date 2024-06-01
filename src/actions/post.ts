"use server"
import client from "@/db"

interface postprops{
    content: string,
    img?: string,
    author:Author,
}
export default function createPost({content,img,author}:postprops)