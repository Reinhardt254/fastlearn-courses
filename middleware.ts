import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
      publicRoutes : ["/" , "/contact" , "/about", "/privacy", "/security", "/api/messages","/cart", "/course/[courseId]", "/products"]
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 