import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Navbar from "./navBar";






export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
          <Navbar/>
          <div className="" >{children}</div>
        <Footer/>
        
      </body>
    </html>
  );
}
