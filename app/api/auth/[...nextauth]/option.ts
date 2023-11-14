import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Github profile: ", profile);

        let userRole = "GitHub User";
        if (profile?.email === "albi.benni8@gmail.com") {
          userRole = "admin";
        }
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Google profile: ", profile);

        return {
          ...profile,
          id: profile.sub,
          role: "admin",
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt ({token, user}: any) {
        if (user) token.role = user.role;
        return token;
      },
    },
    async session ({session, token}: any){
        if(session?.user) session.user.role = token.role;
        return session;

    }
  }
};
