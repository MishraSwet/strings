"use server"
import client from "@/db"

export function addComment(id: number, content: string) {
    client.comment.create({
        data: {
            content: content,
            authorId:id
        }
    })
    return "Comment Added"
}

export function editComment(id: number, flag: boolean) {
    return "Comment Edited"
}

export function deleteComment(id: number, flag: boolean) {
    return "Comment Deleted"
}

