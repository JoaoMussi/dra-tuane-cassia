import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./assets/globals.css";
import "./assets/reset.css";
import Navigation from "@/app/shared-components/navigation/navigation";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Dra Tuane Cássia", description: "Aqui você encontra tudo sobre a Dra Tuane Cássia e os serviços que ela oferece!",
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation/>
                {children}
            </body>
        </html>
    );
}
