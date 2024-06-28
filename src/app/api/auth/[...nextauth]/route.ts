import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import client from "@/db"


async function findUserByEmailAndPassword(email: string, password: string){
    
}
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
            async authorize(credentials, req) {
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
});

export { handler as GET, handler as POST };
