import '@/app/global.css'
import Navbar from './ui/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Thanesh Kumar</title>
      </head>
      <body>
        <div className='md:border-b-0 border-b-2'>
          <Navbar />
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
