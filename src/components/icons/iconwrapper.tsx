import iconsSprite from './sprite.svg'

type IconPropsType = {
  fill: string
  iconId: string
  size: number
  viewBox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      fill={'none'}
      height={props.size}
      viewBox={props.viewBox || '0 0 24 24'}
      width={props.size}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use fill={props.fill} xlinkHref={`${iconsSprite}#${props.iconId} `} />
    </svg>
  )
}
