import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
  
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          console.error("Email or Password is missing");
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
          console.log("Response From Backend:", res);
          if (!res?.ok) {
            console.error("❌ Login Failed", await res.text());
            return null;
          }

          const result = await res.json();
          const user = result?.user;
          console.log("🔎 authorize() result:", result);
          console.log("✅ Final returned user:", user);
          if (user?.success || user?.id) {
            return {
              id: user?.id,
              name: user?.name || null,
              email: user?.email,
              role: user?.role,
              phone: user?.phone,
              image: user?.image,
              status: user?.status,
              token: result?.token,
            };
          } else {
            return null;
          }
        } catch (err) {
          console.error("❌ Auth error" ,err);
          return null;
        }
      },
    }),
  ],
  
 
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};