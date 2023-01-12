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
      <body className="h-screen  lg:overflow-hidden p-[10px] bg-black text-white font-body subpixel-antialiased">
        {children}
      </body>
    </html>
  )
}

export default RootLayout;

//background: 'linear-gradient(129deg, rgba(53,75,71,1) 19%, rgba(70,113,108,1) 50%, rgba(53,75,71,1) 80%)'