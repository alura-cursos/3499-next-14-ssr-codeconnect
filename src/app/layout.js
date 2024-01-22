export const metadata = {
  title: 'Code Connect',
  description: 'Uma rede social para devs!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
