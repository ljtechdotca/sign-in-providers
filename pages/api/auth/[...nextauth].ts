import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

const adapter = {
  ...PrismaAdapter(prisma),
  linkAccount: ({ ...data }) => prisma.account.create({ data }),
  createUser: ({ ...data }) => prisma.user.create({ data }),
};

const google = {
  clientId: process.env.GOOGLE_ID ?? "",
  clientSecret: process.env.GOOGLE_SECRET ?? "",
};

export default NextAuth({
  adapter: adapter,
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: google.clientId,
      clientSecret: google.clientSecret,
    }),
  ],
});
