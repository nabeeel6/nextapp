import 'bootstrap/dist/css/bootstrap.min.css'; // load bootstrap CSS from node_modules
import './globals.css';
import Script from 'next/script';
import { CartProvider } from './context/cartContext';
import Navbar from './components/Navbar';
import { ReactNode } from 'react';
import Footer from "./Footer"

export const metadata = {
  title: " N's N ",
  description: 'Beginner demo using FakeStore API and Bootstrap',
  icons:{
    icon:"/images/logo.png"
  }
  
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:"rgb(249, 245, 239)"}}>
        <CartProvider>
          <Navbar />
          <div className="container my-4">{children}</div>
        <Footer/>
        </CartProvider>

        {/* Load Bootstrap JS bundle (only JS; CSS loaded above via import).
            Using next/script ensures it runs after the page is interactive. */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}