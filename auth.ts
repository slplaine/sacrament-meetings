import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { neon } from '@neondatabase/serverless';

import { authConfig } from './auth.config';

const sql = neon(process.env.DATABASE_URL!);

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (!parsed.success) {
          return null;
        }

        const { email, password } = parsed.data;

        const users = await sql`
          SELECT *
          FROM users
          WHERE email = ${email}
        `;

        const user = users[0];

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(
          password,
          user.password_hash
        );

        if (!isValid) {
          return null;
        }

        return {
          id: String(user.id),
          email: user.email,
        };
      },
    }),
  ],
});