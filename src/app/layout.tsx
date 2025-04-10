// import type { Metadata } from "next";
// import { Inter ,Calistoga } from "next/font/google";
import "./globals.css";
// import {twMerge} from 'tailwind-merge'
import { aeonik, cn, generateMetadata, inter } from "@/utils";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/providers/providers";
import Navbar from "@/components/Navigation/navbar";
import Footer from "@/components/Navigation/footer";
import StarsCanvas from "@/sections/StarBackground";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scrollbar">
            <body
                className={cn(
                    "min-h-screen bg-neutral-950 text-foreground text-white antialiased !font-default overflow-x-hidden",
                    aeonik.variable,
                    inter.variable,
                )}
            >
                  {/* <StarsCanvas /> */}
                <Providers>
                    <Toaster richColors theme="dark" position="top-right" />
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
};




// const inter = Inter({
//     variable: "--font-inter",
//     subsets: ["latin"],
//     display: "swap",
//     axes: ["opsz"],
// });
// const calistoga = Calistoga({
//     weight: "400",
//     variable: "--font-serif",
//     subsets:["latin"]
// });
// export const metadata: Metadata = {
    
//     title: "QuantechBit",
//     description: "Let's make a Brand to geather",
// };




// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="en">
//             <body
//                 className={twMerge(inter.className ,calistoga.className, "font-sans antialiased bg-neutral-950 text-white")}
//             >
//                  {/* <StarsCanvas /> */}
//                 {children}
//             </body>
//         </html>
//     );
// }
