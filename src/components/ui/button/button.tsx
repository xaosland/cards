import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const onClickHandler = () => {
    console.log('hello')
  }
  const {
    as: Component = 'button',
    className,
    fullWidth,
    icon,
    onClick,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s.button} ${variant === 'primary' ? s.primary : s.secondary} ${
        fullWidth ? s.fullWidth : ''
      } ${className}`}
      onClick={onClickHandler}
      {...rest}
    >
      {icon && <span className={s.icon}>{icon}</span>}
      {props.children}
    </Component>
  )
}
