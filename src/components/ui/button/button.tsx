import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

import SvgMicOutline from '@/assets/icons/components/MicOutline'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  icon?: boolean
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'default'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    icon,
    variant = 'default',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${variant === 'primary' ? s.primary : variant === 'secondary' ? s.secondary : s.default} ${
        fullWidth ? s.fullWidth : ''
      } ${className}`}
      {...rest}
    >
      {icon && <SvgMicOutline className={s.ico} />}
      {children}
    </Component>
  )
}
