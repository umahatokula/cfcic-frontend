import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
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
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = user?.statusCode !== 403;

      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
});

export { handler as GET, handler as POST };
