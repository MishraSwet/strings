import { NextRequest } from "next/server";

export function GET(req:NextRequest) {
    return Response.json({msg:"New Post"})
}