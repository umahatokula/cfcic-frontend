import axios from "@/lib/axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

//This is for getting the laravel-session cookie and the CSRF cookie
//from any response of Sanctum or API Breeze
//In my case, the cookies returned are always two and I only need this,
//so you can edit for get independent of position and cookies.
const getCookiesFromResponse = (res: any) => {
  let cookies = res.headers["set-cookie"][0].split(";")[0] + "; ";
  cookies += res.headers["set-cookie"][1].split(";")[0] + "; ";
  return cookies;
};

//This is to get the X-XSRF-TOKEN from any response of Sanctum or API Breeze,
//In my case, the token is always returned first,
//so you can edit for get independent of position
const getXXsrfToken = (res: any) => {
  return decodeURIComponent(
    res.headers["set-cookie"][0].split(";")[0].replace("XSRF-TOKEN=", "")
  );
};

//This method works to make any request to your Laravel API
//res_cookies are the cookies of the response of last request you do
//obviously res_cookies is null in your first request that is "/sanctum/csrf-cookie"
const makeRequest = async (
  method = "get",
  url: any,
  dataForm = null,
  res_cookies: any
) => {
  const cookies =
    res_cookies != null ? getCookiesFromResponse(res_cookies) : null;
  const res = await axios.request({
    method: method,
    url: url,
    data: dataForm,
    headers: {
      origin: process.env.NEXTAUTH_URL, // this is your front-end URL, for example in local -> http://localhost:3000
      Cookie: cookies, // set cookie manually on server
      "X-XSRF-TOKEN": res_cookies ? getXXsrfToken(res_cookies) : null,
    },
    withCredentials: true,
    credentials: true,
  });
  return res;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        axios.get(`/sanctum/csrf-cookie`).then(async (response) => {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );
          let user = await res.json();

          if (user) return user;
          return null;
        });
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
    // async signIn({ user, account, profile, email, credentials }) {
    //   const isAllowedToSignIn = user?.errors.length > 0;
    //   console.log(
    //     "🚀 ~ file: route.ts:55 ~ signIn ~ isAllowedToSignIn:",
    //     isAllowedToSignIn
    //   );

    //   if (isAllowedToSignIn) {
    //     return true;
    //   } else {
    //     // Return false to display a default error message
    //     return false;
    //     // Or you can return a URL to redirect to:
    //     // return '/unauthorized'
    //   }
    // },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
