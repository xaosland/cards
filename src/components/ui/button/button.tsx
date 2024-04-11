import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'
import Search from '@/assets/icons/components/Search'
import LogOut from '@/assets/icons/components/LogOut'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  fullWidth?: boolean
  icon?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', children, className, fullWidth, icon, variant, ...rest } = props

  return (
    <Component
      className={`${s.button} ${variant === 'primary' ? s.primary : variant === 'secondary' ? s.secondary : s.default} ${
        fullWidth ? s.fullWidth : ''
      } ${className}`}
      {...rest}
    >
      {icon && <LogOut className={s.ico} />}
      {children}
    </Component>
  )
}
