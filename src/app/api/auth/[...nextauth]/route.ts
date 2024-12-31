import NextAuth from "next-auth"
import Github from "next-auth/providers/github"


export const authOption = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  secret: process.env.NEXTAUTH_SECRET as string
}

const handler = NextAuth(authOption)

export {handler as GET, handler as POST}