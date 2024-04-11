import { Button } from '@/components/ui/button/button'
import { TextField } from '@/components/ui/input/input'
import { useState } from 'react'
import { Typography } from '@/components/typography'

export function App() {
  const [value, setValue] = useState('')
  const clearValue = () => setValue('')
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '100svh',
        justifyContent: 'center',
      }}
    >
      <div>
        <Button variant={'primary'} icon={true}>
          <Typography variant={'subtitle2'}>Button primary</Typography>
        </Button>

        <p></p>
        <TextField
          label={'Input'}
          value={value}
          placeholder={'Input'}
          search
          onClearClick={clearValue}
          errorMessage={''}
          onChange={e => {
            setValue(e.currentTarget.value)
          }}
        />
      </div>
    </div>
  )
}
