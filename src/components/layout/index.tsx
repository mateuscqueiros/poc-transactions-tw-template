'use client';

import { usePathname, useRouter } from 'next/navigation';

export type LayoutProps = {} & React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  const path = usePathname();
  const router = useRouter();

  const notHome = path !== '/';

  return (
    <div className="min-h-screen">
      {notHome && (
        <header className="py-3 flex justify-between max-w-lg w-full mx-auto">
          <div className="flex items-center gap-2">
            <button
              className="btn btn-circle"
              onClick={() => router.replace('/')}
            >
              <i className="ri-arrow-left-line"></i>
            </button>
          </div>
        </header>
      )}
      <main className="p-4 max-w-[1000px] w-full mx-auto">{children}</main>
    </div>
  );
}
