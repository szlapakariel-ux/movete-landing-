import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'whatsapp'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-lime-500 text-ink-900 hover:bg-lime-400 hover:shadow-glow active:scale-[0.98]',
  secondary:
    'border border-white/25 bg-white/5 text-paper hover:border-lime-500 hover:text-lime-400 active:scale-[0.98]',
  ghost: 'text-paper/80 hover:text-lime-400',
  whatsapp:
    'border border-lime-500/40 bg-lime-500/10 text-lime-400 hover:bg-lime-500/20 active:scale-[0.98]',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type ButtonProps = ButtonAsButton | ButtonAsLink

/** Botón/anchor reutilizable con variantes de marca y estados accesibles. */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...rest
  } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (props.as === 'a') {
    const { as: _as, ...anchorRest } = rest as ButtonAsLink
    return (
      <a className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const { as: _as, ...buttonRest } = rest as ButtonAsButton
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
