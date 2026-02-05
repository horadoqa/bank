import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Menu } from "./menu/Menu"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bank",
  description: "Cadastro e busca de candidatos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <Menu />
    <main style={{ flex: 1, padding: '2rem' }}>
      {children}
    </main>
  </div>
</body>
    </html>
  )
}
