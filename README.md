This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Set the following environment variables in `.env.local`:

`NEXT_PUBLIC_API_URL=api-server-url eg https://cfc-app.onrender.com`

`NEXTAUTH_URL=http://127.0.0.0:3000`

`NEXTAUTH_SECRET=any-secret-phrase`

See [https://next-auth.js.org/configuration/options#nextauth_url](https://next-auth.js.org/configuration/options#nextauth_url) for more details on NEXTAUTH_URL & NEXTAUTH_SECRET
