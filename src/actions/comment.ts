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

export function editComment(id: number, content: string) {
    client.comment.update({
        where: {
            id
        },
        data: {
        content:content
    }})
    return "Comment Edited"
}

export function deleteComment(id: number) {
    client.comment.delete({
        where: {
            id
        }
    })
    return "Comment Deleted"
}

