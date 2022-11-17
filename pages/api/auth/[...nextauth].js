//next
import NextAuth from 'next-auth/next'

//google provider
import GoogleProvider from 'next-auth/providers/google'

//hooks
import { createUser, getUserById } from 'lib/sanity/mutations/user'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    jwt: {},
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            await createUser(user, account.provider);
            return true;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith(baseUrl)) return url;
            // Allows relative callback URLs
            else if (url.startsWith('/'))
                return new URL(url, baseUrl).toString();
            return baseUrl;
        },
        async session({ session, token, user }) {
            const userData = await getUserById(token.sub);

            session.user = userData;

            return session.user;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token;
        }
    },
    events: {},

    theme: {
        colorScheme: 'light',
    },

    debug: false,

    secret: process.env.NEXT_PUBLIC_SECRET
})