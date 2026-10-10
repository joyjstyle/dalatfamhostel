import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import './globals.css';
const heading = localFont({ src: '../../fonts/bricolage-grotesque-latin.woff2', variable: '--font-heading', display: 'swap', weight: '400 800' });
const body = localFont({ src: [
  { path: '../../fonts/be-vietnam-pro-latin-400.woff2', weight: '400' },
  { path: '../../fonts/be-vietnam-pro-latin-600.woff2', weight: '600' },
], variable: '--font-body', display: 'swap' });
export const metadata: Metadata = {
  title: 'Dalat Family Hostel — Da Lat, Vietnam',
  description: 'A social backpacker hostel in Da Lat, Vietnam.',
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${heading.variable} ${body.variable}`}>
    <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-32 rounded-sm bg-brand px-5 py-3 text-on-brand focus:translate-y-0">Skip to content</a>
    <SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter />
  </body></html>;
}
