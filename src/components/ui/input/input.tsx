import {
  ComponentProps,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useState,
  HTMLInputTypeAttribute,
} from 'react'

import { useGetId } from './useGetId'
import { clsx } from 'clsx'

import s from './text-field.module.scss'
import Search from '@/assets/icons/components/Search'
import { Typography } from '@/components/typography'
import Close from '@/assets/icons/components/Close'
import Eye from '@/assets/icons/components/Eye'
import EyeOff from '@/assets/icons/components/EyeOff'

export type TextFieldProps = {
  errorMessage?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  label?: ReactNode
  onClearClick?: () => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  search?: boolean
  value?: string
  enablePassword?: boolean
} & ComponentProps<'input'>

// НЕ УДАЛЯТЬ КОММЕНТ ПЕРЕД forwardRef - без него ломается tree shaking
export const TextField = /* @__PURE__ */ forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      errorMessage,
      iconEnd,
      iconStart,
      id,
      label,
      onClearClick,
      onEnter,
      onKeyDown,
      search,
      enablePassword,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0
    const inputId = useGetId(id)

    if (search) {
      iconStart = <Search color={'var(--color-text-secondary)'} />
    }

    const classNames = {
      clearButton: s.clearButton,
      iconEnd: s.iconEnd,
      iconStart: s.iconStart,
      input: clsx(s.input, showError && s.error),
      inputContainer: s.inputContainer,
      root: clsx(s.box, className),
    }

    const isShowClearButton = search && onClearClick && rest?.value?.length! > 0

    const dataIconStart = iconStart ? 'start' : ''
    const dataIconEnd = iconEnd || isShowClearButton ? 'end' : ''
    const dataIcon = dataIconStart + dataIconEnd

    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(() => {
      if (enablePassword) {
        return 'password'
      } else {
        return 'text'
      }
    })
    const handleChangePasswordType = () => {
      setInputType(prev => (prev === 'text' ? 'password' : 'text'))
    }
    return (
      <div className={classNames.root}>
        {label && (
          <Typography as={'label'} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={classNames.inputContainer}>
          {!!iconStart && <span className={classNames.iconStart}>{iconStart}</span>}
          <input
            className={classNames.input}
            data-icon={dataIcon}
            id={inputId}
            ref={ref}
            type={inputType}
            {...rest}
          />
          {enablePassword && (
            <button onClick={handleChangePasswordType} type={'button'} className={s.clearButton}>
              {inputType === 'text' ? (
                <Eye className={s.iconEnd} />
              ) : (
                <EyeOff className={s.iconEnd} />
              )}
            </button>
          )}
          {isShowClearButton && (
            <button className={classNames.clearButton} onClick={onClearClick} type={'button'}>
              {<Close color={'var(--color-border-input-active)'} />}
            </button>
          )}
          {!!iconEnd && <span className={classNames.iconEnd}>{iconEnd}</span>}
        </div>

        {showError && <Typography variant={'error'}>{errorMessage}</Typography>}
      </div>
    )
  }
)
