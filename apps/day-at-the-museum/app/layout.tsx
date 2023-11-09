import './global.css';

export const metadata = {
  title: 'Day at The Museum',
  description: 'Created by Sandi Barr. Powered by The Metropolitan Museum of Art Collection API, Apollo GraphQL, and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
