import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Salome 17",
  description: "Pagina para Desarrollo de la capacidad emprendedora",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link rel="shortcut icon" href="/favicon.ico" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
