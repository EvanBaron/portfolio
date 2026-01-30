import type { ComponentPropsWithoutRef } from 'react'

interface IllustrationProps extends ComponentPropsWithoutRef<'div'> {
  name: string
  color?: string
  raw?: boolean
}

export default function Illustration({
  name,
  className,
  style,
  color,
  raw,
  ...props
}: IllustrationProps) {
  if (raw) {
    return (
      <img
        src={`/${name}.svg`}
        alt={name}
        className={className}
        style={style}
        {...props}
      />
    )
  } else {
    const maskStyle = {
      maskImage: `url('/${name}.svg')`,
      WebkitMaskImage: `url('/${name}.svg')`,
      WebkitMaskRepeat: 'no-repeat',
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
      backgroundColor: color || 'currentColor',
      ...style,
    }

    return <div className={className} style={maskStyle} {...props} />
  }
}
