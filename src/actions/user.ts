"use server"
import client from "@/db"

interface editprops{
    id: number
    username?: string
    phone?: string
    email?: string
}

export async function signup(username: string, password: string,phone:string,email:string) {
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: username,
            password: password,
            phone: phone,
            email: email,
        },
    });
                                               
    console.log(user.id);

    return "Signed up!"
}

export async function edit(editprop: editprops) {
    if (editprop.username) {
        let username = editprop.username
        const updatedUser=await client.user.update({
        where: {
            id:editprop.id
        },data: {
            username: username,   
        }
    })
    }
    if (editprop.email) {
        let email = editprop.email
        const updatedUser=await client.user.update({
        where: {
            id:editprop.id
        },data: {
            email: email,   
        }
    })
    }
    if (editprop.phone) {
        let phone = editprop.phone
        const updatedUser=await client.user.update({
        where: {
            id:editprop.id
        },data: {
           phone:phone,   
        }
    })
    }
    console.log("Updated")
    return "Updated"
}

export async function changePass(id:number,password: string) {
    let changedUser = await client.user.update({
        where: {
            id:id
        },
        data: {
            password:password
        }
    })
    console.log("Password Changed Successfully")
    return "Changed"
}

