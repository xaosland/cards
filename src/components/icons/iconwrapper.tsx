import iconsSprite from './sprite.svg'
import './icon.scss'

type IconPropsType = {
  fill?: string
  iconId: string
  size: number
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  const { fill = '#fff', iconId, size, viewBox } = props
  return (
    <svg
      fill={'none'}
      height={size}
      viewBox={viewBox || '0 0 24 24'}
      width={size}
      xmlns={'http://www.w3.org/2000/svg'}
      className={'icons'}
    >
      <use fill={fill} xlinkHref={`${iconsSprite}#${iconId} `} />
    </svg>
  )
}
