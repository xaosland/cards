import { Typography } from '@/components/typography'

import s from '@/components/ui/input/input.module.scss'

type InputType = {
  className?: string
  id?: string
  label?: string
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  value?: number | string
  variant?: 'clear' | 'left' | 'right'
}

export const Input = (props: InputType) => {
  const { className, id, label, name, onChange, placeholder, type, value, variant, ...rest } = props

  const buttonPosition = variant === 'left' ? 'left' : 'right'
  const inputStyles = {
    paddingLeft: variant === 'left' ? '40px' : '12px',
    paddingRight: variant === 'right' ? '40px' : '12px',
  }

  return (
    <div>
      {label && (
        <label>
          <Typography theme={'light'} variant={'caption'}>
            {label}
          </Typography>
        </label>
      )}

      <div style={{ position: 'relative' }}>
        <input
          className={`${s.input}`}
          placeholder={placeholder}
          style={inputStyles}
          type={'text'}
        />

        <button style={{ [buttonPosition]: '-0', position: 'absolute' }}></button>
      </div>
    </div>
  )
}
