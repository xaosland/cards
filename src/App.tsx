import { Button } from '@/components/ui/button/button'
import { Icon } from '@/components/icons/iconwrapper'
import { Typography } from '@/components/typography'

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
      </div>
    </div>
  )
}
