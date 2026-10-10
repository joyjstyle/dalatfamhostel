import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
type Variant = 'primary' | 'secondary';
const variants: Record<Variant, string> = {
  primary: 'bg-accent text-on-accent hover:bg-accent-hover',
  secondary: 'border border-brand text-brand hover:bg-brand hover:text-on-brand',
};
function styles(variant: Variant, className: string) {
  return `inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;
}
export function Button({ variant = 'primary', className = '', type = 'button', ...props }: ComponentPropsWithoutRef<'button'> & { variant?: Variant }) {
  return <button type={type} className={styles(variant, className)} {...props} />;
}
export function ButtonLink({ variant = 'primary', className = '', ...props }: ComponentPropsWithoutRef<typeof Link> & { variant?: Variant }) {
  return <Link className={styles(variant, className)} {...props} />;
}
