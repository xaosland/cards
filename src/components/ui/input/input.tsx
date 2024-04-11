import {
  ReactNode,
  forwardRef,
  useState,
  HTMLInputTypeAttribute,
  ComponentPropsWithRef,
} from 'react'
import s from './text-field.module.scss'

import { useGetId } from './useGetId'
import Search from '@/assets/icons/components/Search'
import { Typography } from '@/components/typography'
import Eye from '@/assets/icons/components/Eye'
import EyeOff from '@/assets/icons/components/EyeOff'
import Close from '@/assets/icons/components/Close'

export type TextFieldProps = {
  errorMessage?: string
  label?: ReactNode
  onClearClick?: () => void
  search?: boolean
  value?: string
  togglePassword?: boolean
} & ComponentPropsWithRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      errorMessage,
      id,
      label,
      onClearClick,
      onKeyDown,
      togglePassword,
      search,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0
    const inputId = useGetId(id)

    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(() => {
      if (togglePassword) {
        return 'password'
      } else {
        return 'text'
      }
    })

    const isShowClearButton = rest?.value?.length! > 0
    const handleChangePasswordType = () => {
      setInputType(prev => (prev === 'text' ? 'password' : 'text'))
    }
    return (
      <div>
        {label && (
          <Typography theme={'light'} variant={'subtitle2'}>
            {label}
          </Typography>
        )}
        <div className={s.inputContainer}>
          <input className={s.input} id={inputId} ref={ref} type={inputType} {...rest} />

          {togglePassword && (
            <button onClick={handleChangePasswordType} type={'button'} className={s.clearButton}>
              {inputType === 'text' ? (
                <Eye className={s.iconEnd} />
              ) : (
                <EyeOff className={s.iconEnd} />
              )}
            </button>
          )}
          {search && (
            <>
              <Search className={s.iconStart} />
              {isShowClearButton && (
                <button className={s.clearButton} onClick={onClearClick}>
                  <Close className={s.iconEnd} />
                </button>
              )}
            </>
          )}
          {errorMessage && (
            <Typography className={s.errorLabel} variant={'error'}>
              {errorMessage}
            </Typography>
          )}
        </div>
      </div>
    )
  }
)
