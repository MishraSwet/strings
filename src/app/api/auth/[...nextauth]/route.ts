import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "@/db"


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                if(!credentials?.email)
                    return null;
                const email = credentials.email;
                const user = await client.user.findFirst(
                   
                );

                // Step 3: Return user object if authentication is successful
                if (user) {
                    return user;
                }
            },
        }),
    ],
    callbacks: {
        jwt:(token)=>{
            
        }
    }
});

export { handler as GET, handler as POST };
