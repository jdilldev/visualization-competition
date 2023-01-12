import './globals.css'
import { createTheme, createThemePaletteBasic } from '@arwes/design';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0ff',
      dark1: '#0cc',
      dark2: '#099',
      dark3: '#066',
      light1: '#3ff',
      light2: '#6ff',
      light3: '#9ff'
    },
    tonalOffset: 0.15,
    secondary: {
      main: '#f0f'
    },
    elevationOffset: 0.025,
    neutral: {
      main: '#111'
    },
    yourOwnBasicPalette: createThemePaletteBasic({ main: '#00f' }, 0.1)
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
      <body className="h-screen  lg:overflow-hidden p-[10px] bg-black text-white font-body subpixel-antialiased">
        {children}
      </body>
    </html>
  )
}

export default RootLayout;

//background: 'linear-gradient(129deg, rgba(53,75,71,1) 19%, rgba(70,113,108,1) 50%, rgba(53,75,71,1) 80%)'