import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

import { Icon } from '@/components/icons/iconwrapper'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  icon?: boolean
  onClick?: () => void
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    icon,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${variant === 'primary' ? s.primary : s.secondary} ${
        fullWidth ? s.fullWidth : ''
      } ${className}`}
      {...rest}
    >
      {icon && <Icon iconId={'arrow'} size={16} />}
      {children}
    </Component>
  )
}
