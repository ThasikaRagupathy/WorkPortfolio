import type { HTMLAttributes } from "react"

type AspectRatioProps = HTMLAttributes<HTMLDivElement> & {
  ratio?: number
}

function AspectRatio({ ratio = 1, style, ...props }: AspectRatioProps) {
  return (
    <div
      data-slot="aspect-ratio"
      style={{ ...style, aspectRatio: ratio }}
      {...props}
    />
  )
}

export { AspectRatio }
