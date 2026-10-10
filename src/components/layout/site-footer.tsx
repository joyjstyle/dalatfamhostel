import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { site } from '@/content/site';
export function SiteFooter() {
  return <footer className="border-t border-border-subtle py-10"><Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
    <div><p className="font-display text-2xl font-bold">{site.name}</p><p className="mt-2 text-muted-text">{site.location}</p><p className="mt-4 max-w-sm text-sm text-muted-text">Development foundation. Contact and booking details are awaiting approval.</p></div>
    <nav aria-label="Footer navigation"><ul className="flex flex-wrap gap-x-6 gap-y-2">{site.navigation.map(item => <li key={item.href}><Link className="inline-flex min-h-11 items-center underline underline-offset-4" href={item.href}>{item.label}</Link></li>)}</ul></nav>
  </Container></footer>;
}
