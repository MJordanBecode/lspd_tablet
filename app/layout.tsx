// app/layout.tsx
import './globals.css'; // Import global CSS
import Tablet from './page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head />
      <body>
        <Tablet />
        {children}
      </body>
    </html>
  );
}
