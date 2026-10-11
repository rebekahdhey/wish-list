import type { StarColor } from '../types/wish'

export const starColors: Record<StarColor, { label: string; swatch: string; fill: string; drop: string }> = {
  gold:   { label: 'Gold',   swatch: 'bg-amber-300',  fill: 'text-amber-300',  drop: 'drop-shadow-[0_0_8px_rgba(252,211,77,0.9)]' },
  pink:   { label: 'Pink',   swatch: 'bg-pink-300',   fill: 'text-pink-300',   drop: 'drop-shadow-[0_0_8px_rgba(249,168,212,0.9)]' },
  blue:   { label: 'Blue',   swatch: 'bg-sky-300',    fill: 'text-sky-300',    drop: 'drop-shadow-[0_0_8px_rgba(125,211,252,0.9)]' },
  purple: { label: 'Purple', swatch: 'bg-violet-300', fill: 'text-violet-300', drop: 'drop-shadow-[0_0_8px_rgba(196,181,253,0.9)]' },
}