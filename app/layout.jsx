import './globals.css'

export const metadata = {
  title: 'Roll2Loot - Crates for DMs & Players',
  description: 'Handmade 3D printed minis, terrain, and digital crates for tabletop RPGs'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header container">
          <h1 className="text-3xl font-bold">Roll2Loot</h1>
        </header>
        <main className="container">{children}</main>
        <footer className="footer container">© Roll2Loot Studio LLC</footer>
      </body>
    </html>
  )
}
