import "./globals.css";
import NavBar from "./components/NavBar";
import { CartProvider } from "../../context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <NavBar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
