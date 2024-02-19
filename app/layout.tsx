import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'fastlearn',
  description: 'fastlearncourses',
  icons:{
    icon: "/logoimage.png",
    apple:"/logoimage.png"
  },
  keywords:[
    "online courses",
    "free online courses",
    "web developer courses",
   ]
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body 
        className={inter.className}>
          <div className="min-h-screen bg-white">
            <div className="top-0 sticky z-50">
             <Navbar />
            </div>
            <div className="min-h-screen">
             {children}
            </div>
            <div className="z-50">
              <Footer />
            </div>
          </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
