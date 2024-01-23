import { Inter } from 'next/font/google'
import './globals.css'
import localFont from "next/font/local";


export const metadata = {
  title: 'Build With Leo',
  description: 'Creative Powerhouse',
}
const monument_normal = localFont({
  src: "../../public/fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument_normal",
});
const monument_bold = localFont({
  src: "../../public/fonts/MonumentExtended-Ultrabold.otf",
  variable: "--font-monument_bold",
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${monument_normal.variable} ${monument_bold.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
