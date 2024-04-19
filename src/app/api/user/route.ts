import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
    return Response.json({
        "Message":"Success"
    })
}

export function POST(req: NextRequest) {
    //Validate req body
    //Create User in DB

    const body = req.body;
    return Response.json({ "msg":"User Created Successfully"})

}