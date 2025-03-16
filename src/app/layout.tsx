import type { Metadata } from "next";
import { Inter ,Calistoga } from "next/font/google";
import "./globals.css";
import {twMerge} from 'tailwind-merge'
import StarsCanvas from "@/sections/StarBackground";
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});
const calistoga = Calistoga({
    weight: "400",
    variable: "--font-serif",
    subsets:["latin"]
});
export const metadata: Metadata = {
    
    title: "Modern Design Tool Landing Page",
    description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge(inter.className ,calistoga.className, "font-sans antialiased bg-neutral-950 text-white")}
            >
                 {/* <StarsCanvas /> */}
                {children}
            </body>
        </html>
    );
}
