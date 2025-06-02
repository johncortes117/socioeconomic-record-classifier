import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Record classifier',
  description: 'Automatización del Análisis y Clasificación de Fichas Socioeconómicas para una Segmentación Eficiente de Estudiantes en la UPEC mediante un LLM',
  generator: '...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
