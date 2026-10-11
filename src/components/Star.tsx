import type { Wish } from '../types/wish'
import { starColors } from '../data/starColors'

type StarProps = {
  wish: Wish
  isSelected: boolean
  onSelect: (id: number) => void
}

function Star({ wish, isSelected, onSelect }: StarProps) {
  const color = starColors[wish.color]
  const twinkleDelay = (wish.id % 5) * 0.6

  return (
    <button
      onClick={() => onSelect(wish.id)}
      aria-label={`Wish: ${wish.text}`}
      style={{ left: `${wish.x}%`, top: `${wish.y}%` }}
      className={`absolute -translate-x-1/2 -translate-y-1/2 transition duration-300 hover:scale-125 ${color.fill} ${color.drop} ${
        isSelected ? 'scale-150' : ''
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ animationDelay: `${twinkleDelay}s` }}
        className="animate-twinkle h-7 w-7"
      >
        <polygon points="12,2 15.1,8.3 22,9.3 17,14.1 18.2,21 12,17.8 5.8,21 7,14.1 2,9.3 8.9,8.3" />
      </svg>
    </button>
  )
}

export default Star