import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tracecafé | Every cup tells a story",
    description: "TraceCafé allows consumers to trace the origin of their coffee with a simple scan. Each QR code reveals comprehensive information about the coffee's journey from farm to cup, including producer details, batch history, and customer reviews.",
    icons: {
        icon: "/favicon.ico",
    },
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    font.className
                )}
            >
                {children}
            </body>
        </html>
    );
};
