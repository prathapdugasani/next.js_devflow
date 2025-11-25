import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
console.log("Provider:", process.env.AUTH_GITHUB_ID, process.env.AUTH_GITHUB_SECRET);
