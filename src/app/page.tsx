import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
const sections = [
  { id: 'rooms', label: '02 / Your stay', title: 'A place to land.', text: 'Room information, photographs and accommodation policies will be added once verified.' },
  { id: 'experiences', label: '03 / Explore', title: 'Let curiosity lead.', text: 'Approved hostel activities and tour information will live here. No activities or tours are currently advertised.' },
  { id: 'location', label: '04 / Find us', title: 'Da Lat, Vietnam.', text: 'The verified address, directions and arrival guidance will be added before launch.' },
];
export default function HomePage() {
  return <>
    <Container><section aria-labelledby="hero-heading" className="py-16 sm:py-24 lg:py-28">
      <p className="mb-6 text-sm font-semibold tracking-wide text-brand">DALAT FAMILY HOSTEL · VIETNAM</p>
      <h1 id="hero-heading" className="max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)] font-bold leading-[1.04] tracking-tight">Your next chapter<br className="hidden sm:block" /> starts in Da Lat.</h1>
      <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <p className="max-w-xl text-lg text-muted-text">A social backpacker hostel for travellers finding their way through Vietnam.</p>
        <ButtonLink href="#hostel-life" variant="secondary">Explore hostel life <ArrowDown size={18} aria-hidden="true" /></ButtonLink>
      </div>
      <div className="mt-12 flex min-h-48 flex-col justify-end border border-border-control p-6 sm:min-h-64 sm:p-8" role="note">
        <p className="font-display text-2xl font-semibold text-brand">A real story deserves real photographs.</p>
        <p className="mt-2 max-w-xl text-sm text-muted-text">Photography placeholder — approved hostel images will replace this panel. This is a development preview, not a live booking website.</p>
      </div>
    </section></Container>
    <section id="hostel-life" aria-labelledby="life-heading" className="dark-surface bg-brand py-16 text-on-brand sm:py-24"><Container className="grid gap-8 md:grid-cols-2">
      <div><p className="mb-4 text-sm font-semibold tracking-wide">01 / Hostel life</p><h2 id="life-heading" className="max-w-lg text-4xl font-semibold leading-tight !text-on-brand sm:text-5xl">Travel is better<br />with a little company.</h2></div>
      <div className="max-w-lg self-end"><p className="text-lg">Welcome to Dalat Family Hostel, a social backpacker hostel in Da Lat.</p><p className="mt-4 text-sm">Our story, communal spaces and guest experiences will be shared here with approved copy and authentic photography.</p></div>
    </Container></section>
    <Container>{sections.map(section => <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="grid gap-6 border-b border-border-subtle py-14 last:border-b-0 sm:py-20 md:grid-cols-[1fr_1.3fr]">
      <p className="text-sm font-semibold text-muted-text">{section.label}</p><div><h2 id={`${section.id}-heading`} className="text-4xl font-semibold leading-tight sm:text-5xl">{section.title}</h2><p className="mt-5 max-w-xl text-muted-text">{section.text}</p></div>
    </section>)}<section aria-labelledby="booking-heading" className="border-t border-border-subtle py-12"><h2 id="booking-heading" className="text-2xl font-semibold">Booking information</h2><p className="mt-3 max-w-2xl text-muted-text">Booking and contact details are awaiting verification. This preview cannot accept reservations or enquiries.</p><a href="#hero-heading" className="mt-5 inline-flex min-h-11 items-center gap-2 underline underline-offset-4">Back to the introduction <ArrowUpRight size={18} aria-hidden="true" /></a></section></Container>
  </>;
}
