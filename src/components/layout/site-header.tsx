import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { MobileNavigation } from './mobile-navigation';
import { site } from '@/content/site';
export function SiteHeader() {
  return <header className="relative z-20 border-b border-border-subtle bg-background">
    <Container className="flex min-h-20 items-center justify-between gap-4">
      <Link href="/" aria-label={`${site.name} — home`} className="font-display text-xl font-bold leading-tight sm:text-2xl">Dalat Family<br /><span className="text-sm font-medium tracking-wide">HOSTEL · DA LAT</span></Link>
      <nav aria-label="Main navigation" className="hidden lg:block"><ul className="flex items-center gap-6">{site.navigation.map(item => <li key={item.href}><Link className="inline-flex min-h-11 items-center font-medium underline-offset-4 hover:underline" href={item.href}>{item.label}</Link></li>)}</ul></nav>
      <MobileNavigation />
    </Container>
  </header>;
}
