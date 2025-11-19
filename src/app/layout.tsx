import { Layout } from '@/components/layout';
import { TransactionsProvider } from '@/features/transactions/providers/transaction-provider';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import 'remixicon/fonts/remixicon.css';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Transações PIX',
  description: 'Crie e gerencie suas transações PIX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="icon" href="/vercel.svg" sizes="any" />
      </head>
      <body className="antialiased">
        <TransactionsProvider>
          <Layout>{children}</Layout>
          <Toaster richColors />
        </TransactionsProvider>
      </body>
    </html>
  );
}
