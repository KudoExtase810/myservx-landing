import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins, Open_Sans } from "next/font/google";
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
const poppins = Poppins({
    variable: "--font-poppins",
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});
const opensans = Open_Sans({
    variable: "--font-opensans",
    display: "swap",
    subsets: ["latin"],
    weight: ["800", "700", "500", "400"],
});
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="fr"
            className={`scroll-smooth ${poppins.variable} ${opensans.variable}`}
        >
            <body className="font-poppins bg-gray-100 h-screen">
                <main>
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
