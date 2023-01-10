import './globals.css'

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
      <body style={{ padding: '10px', height: '100vh', overflow: 'hidden' }} className="bg-black h-screen text-white font-body subpixel-antialiased p-3">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;

//background: 'linear-gradient(129deg, rgba(53,75,71,1) 19%, rgba(70,113,108,1) 50%, rgba(53,75,71,1) 80%)'