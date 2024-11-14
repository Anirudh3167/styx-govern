import CredentialsProvider from "next-auth/providers/credentials"
// import { GetUser } from "@/app/db/Users";

export const authOptions = { // Default JWT tokens
    pages: {
      newUser: '/signup',
      signIn: '/login',
    },
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Username" },
          email: { label: "Email", type: "text", placeholder: "Email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          console.log("Authorize Function (/api/auth/[...nextauth]/route.ts): ");
          const { email, password } = credentials || {};
        //   let user = await GetUser({ email, password });
        let user = {username:"John Doe", email:"oB3H2@example.com", _id:"123"}
          // console.log("From Authorize:", user);
          return user ? {name:user.username,email:user.email,id:user._id} : null;
        }
      })
    ],
    callbacks: {
      async signIn({user, account, profile, email, credentials}: {
        user: any,
        account: any,
        profile: any,
        email: any,
        credentials: any
      }) {
          console.log("Sign In Function (/api/auth/[...nextauth]/route.ts): ");
          return user !== null;
      },
    },
  }