import Link from 'next/link';
import { ApolloWrapper } from '@day-at-the-musuem/apollo-client';

import './global.css';

export const metadata = {
  title: 'Day at The Museum',
  description:
    'Created by Sandi Barr. Powered by The Metropolitan Museum of Art Collection API, Apollo GraphQL, Next.js, and Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-8 mb-8">
        <nav aria-label="Global" className="max-w-fit mx-auto">
          <ul className="flex items-center justify-between p-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="ml-4">
              <span className="mr-4">|</span>
              <Link href="/met">Metropolitan Museum of Art</Link>
            </li>
          </ul>
        </nav>
      
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
