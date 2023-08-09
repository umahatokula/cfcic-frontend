import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    access_token?: string,
    statusCode?: number,
    message?: string,
    error?: string,
    user?: {
      id: number;
      userName: string;
      name: string;
      email: string;
      address: string;
      zip: string;
      role: string;
      access_token: string;
      statusCode?: number;
      message?: string;
      user: User;
    };
  }
}
