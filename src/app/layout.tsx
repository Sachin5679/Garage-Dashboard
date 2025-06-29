import "./globals.css";
// import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
// import { Plus_Jakarta_Sans } from "next/font/google";

// import { Urbanist } from "next/font/google";
// const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
import { Outfit } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });


// const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRED Garage Dashboard",
  description: "Inspired by CRED",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(outfit.className, "min-h-screen bg-background text-foreground")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
