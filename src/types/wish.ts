export type StarColor = 'gold' | 'pink' | 'blue' | 'purple'

export type Wish = {
  id: number
  text: string
  color: StarColor
  x: number // horizontal position in the sky, 0 to 100 (%)
  y: number // vertical position in the sky, 0 to 100 (%)
}