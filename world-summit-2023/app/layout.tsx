'use client'
import './globals.css'
import { createTheme } from '@arwes/design';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    // Default theme palette basic colors.
    tonalOffset: 0.1,
    primary: { main: '#005066' },
    secondary: { main: '#578798' },
    success: { main: '#0f0' },
    error: { main: '#e84242' },

    // Default theme palette elevation colors.
    elevationOffset: 0.025,
    neutral: { main: '#000' },
  }
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeProvider theme={theme}>
        <body className={`h-screen  lg:overflow-hidden p-[10px] bg-slate-900 text-[#9fd0dcb1] font-body subpixel-antialiased`}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}

export default RootLayout;

//background: 'linear-gradient(129deg, rgba(53,75,71,1) 19%, rgba(70,113,108,1) 50%, rgba(53,75,71,1) 80%)'