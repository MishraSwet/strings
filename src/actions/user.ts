"use server"

import client from "@/db"

export async function signup(username: string, password: string) {
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    console.log(user.id);

    return "Signed up!"
}

export async function createPost(username: string, content: String) {
    return "Post Created"
}