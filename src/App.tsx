import { Button } from '@/components/ui/button/button'
import { Icon } from '@/components/icons/iconwrapper'
import { Typography } from '@/components/typography'
import { Input } from '@/components/ui/input/input'

export function App() {
  return (
    <div
      style={{ alignItems: 'center', display: 'flex', height: '100svh', justifyContent: 'center' }}
    >
      <div>
        <Button variant={'primary'}>
          &nbsp;
          <Icon fill={'red'} iconId={'star'} size={18} />
          <Typography theme={'light'} variant={'subtitle2'}>
            Button primary
          </Typography>
        </Button>

        <hr />
        <Typography theme={'light'} variant={'h2'}>
          h1
        </Typography>

        <hr />
        <Input
          label={'Input'}
          placeholder={'Enter your password'}
          type={'text'}
          variant={'right'}
        />
        <hr />
      </div>
    </div>
  )
}
