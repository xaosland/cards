import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

export type TypographyType<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  theme?: 'dark' | 'light'
  variant: VariantsType
} & ComponentPropsWithoutRef<T>

type VariantsType = keyof typeof Variants

const Variants = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  error: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  link1: 'a',
  link2: 'a',
  overline: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
} as const

export const Typography = <T extends ElementType>(props: TypographyType<T>) => {
  const { as: TagName, children, className, theme = '', variant, ...rest } = props
  const typographyClassName = `${s.typography} ${s[variant]} ${theme === 'dark' ? s.dark : ''}`

  const Component = TagName || Variants[variant] || 'span'
  return (
    <Component className={typographyClassName} {...rest}>
      {children}
    </Component>
  )
}
