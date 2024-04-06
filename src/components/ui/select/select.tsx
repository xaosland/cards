import * as Select from '@radix-ui/react-select'

import style from './select.module.scss'

export const MSelect = () => {
  return (
    <>
      <Select.Root>
        <Select.Trigger className={style.select}>Select-box asdsd</Select.Trigger>
        <Select.Portal>
          <Select.Content position={'popper'} sideOffset={5}>
            asdasdasd
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  )
}
