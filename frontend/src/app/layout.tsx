
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ello Frontend",
  description: "Take-home Test from Ello",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/elloinc_logo.jpeg" />
       
      </head>
    
        <body className='custom-scroll'>{children}</body>
 
    </html>
  );
}
