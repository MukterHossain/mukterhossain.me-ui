import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
      phone?: string | null;
      status?: string | null;
      createdAt?: string | null;
      updatedAt?:string | null
      token?: string | null;
    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
    phone?: string | null;
    status?: string | null;
    createdAt?: string | null;
    updatedAt?:string | null;
    token?: string | null;
  }
}


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          // console.error("Email or Password is missing");
          return null;
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );
          if (!res?.ok) {
            console.error("Login Failed", await res.text());
            return null;
          }
          const result = await res.json()
          const user = result?.user
          if (user?.id) {
            return {
              id: user?.id,
              name: user?.name,
              email: user?.email,
              image: user?.image,
              phone: user?.phone,
              role: user?.role,
              status: user?.status,
              token: result?.token,
              createdAt: user?.createdAt,
              updatedAt: user?.updatedAt,

            }
          } else {
            return null
          }

        } catch (err) {
          console.error(err);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user?.id;
        token.name = user?.name;
        token.email = user?.email;
        token.image = user?.image;
        token.role = user?.role;
        token.phone = user?.phone;
        token.status = user?.status;
        token.createdAt = user?.createdAt;
        token.updatedAt = user?.updatedAt;
        token.token = user?.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token?.id as string;
        session.user.name = token?.name as string;
        session.user.email = token?.email as string;
        session.user.image = token?.image as string;
        session.user.role = token?.role as string;
        session.user.phone = token?.phone as string;
        session.user.status = token?.status as string;
        session.user.createdAt = token?.createdAt as string;
        session.user.updatedAt = token?.updatedAt as string;
        session.user.token = token?.token as string;

      }
      return session;
    }
  }
  ,
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  }
}
