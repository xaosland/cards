import { Button } from '@/components/ui/button/button'
import { Typography } from '@/components/typography'
import SearchInput from '@/components/ui/input/input'

export function App() {
  return (
    <div
      style={{ alignItems: 'center', display: 'flex', height: '100svh', justifyContent: 'center' }}
    >
      <div>
        <Button variant={'primary'} icon={true}>
          <Typography theme={'light'} variant={'subtitle2'}>
            Button primary
          </Typography>
        </Button>
        <p></p>
        <SearchInput />
      </div>
    </div>
  )
}
