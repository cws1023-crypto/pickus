import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'light';
  size?: 'md' | 'lg';
  className?: string;
};

const VARIANTS = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20',
  ghost: 'border-2 border-brand-600/30 text-brand-700 hover:border-brand-600 hover:bg-brand-50',
  light: 'bg-white text-brand-700 hover:bg-brand-50 shadow-lg shadow-black/10',
} as const;

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-4 text-base',
} as const;

export function ButtonLink({ href, children, variant = 'primary', size = 'lg', className = '' }: Props) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center rounded-full font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-400/50 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
    </a>
  );
}
