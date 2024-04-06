﻿import type { SVGProps } from 'react'

import clsx from 'clsx'

import { SPRITES_META, type SpritesMap } from '../sprite.gen'

// Our icon will extend an SVG element and accept all its props
export interface IconProps extends SVGProps<SVGSVGElement> {
  name: AnyIconName
}

// Merging all possible icon names as `sprite/icon` string
export type AnyIconName = { [Key in keyof SpritesMap]: IconName<Key> }[keyof SpritesMap]
// Icon name for a specific sprite, e.g. "common/left"
export type IconName<Key extends keyof SpritesMap> = `${Key}/${SpritesMap[Key]}`

export function Icon({ className, name, ...props }: IconProps) {
  const { axis, filePath, iconName, viewBox } = getIconMeta(name)

  return (
    <svg
      // hide icon from screen readers
      aria-hidden
      // "icon" isn't inlined because of data-axis attribute
      className={clsx('icon', className)}
      /**
       * This prop is used by the "icon" class to set the icon's scaled size
       * @see https://github.com/secundant/neodx/issues/92
       */
      data-axis={axis}
      // prevent icon from being focused when using keyboard navigation
      focusable={'false'}
      viewBox={viewBox}
      {...props}
    >
      {/* For example, "/sprites/common.svg#favourite". Change a base path if you don't store sprites under the "/sprites". */}
      <use href={`/sprites/${filePath}#${iconName}`} />
    </svg>
  )
}

/**
 * A function to get and process icon metadata.
 * It was moved out of the Icon component to prevent type inference issues.
 */
const getIconMeta = <Key extends keyof SpritesMap>(name: IconName<Key>) => {
  const [spriteName, iconName] = name.split('/') as [Key, SpritesMap[Key]]
  const {
    filePath,
    items: {
      [iconName]: { height, viewBox, width },
    },
  } = SPRITES_META[spriteName]
  const axis = width === height ? 'xy' : width > height ? 'x' : 'y'

  return { axis, filePath, iconName, viewBox }
}
