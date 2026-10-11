import { useState } from 'react'
import type { FormEvent } from 'react'
import type { StarColor } from '../types/wish'
import { starColors } from '../data/starColors'

type WishFormProps = {
  onSend: (text: string, color: StarColor) => void
}

const MAX_LENGTH = 80
const colorKeys = Object.keys(starColors) as StarColor[]

function WishForm({ onSend }: WishFormProps) {
  const [text, setText] = useState<string>('')
  const [color, setColor] = useState<StarColor>('gold')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed === '') return
    onSend(trimmed, color)
    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-xl flex-col gap-5 rounded-3xl border border-amber-200/20 bg-indigo-900/40 p-6 backdrop-blur"
    >
      <label htmlFor="wish-text" className="text-sm font-semibold text-indigo-100">
        What do you wish for?
      </label>

      <div>
        <textarea
          id="wish-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={MAX_LENGTH}
          rows={3}
          placeholder="I wish for..."
          className="w-full resize-none rounded-2xl border border-indigo-300/30 bg-indigo-950/60 px-4 py-3 text-indigo-50 outline-none transition placeholder:text-indigo-300/50 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/30"
        />
        <p className="mt-1 text-right text-xs text-indigo-300">
          {text.length} / {MAX_LENGTH}
        </p>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-indigo-100">Pick your star's color</p>
        <div className="flex gap-3">
          {colorKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setColor(key)}
              aria-label={starColors[key].label}
              className={`h-9 w-9 rounded-full transition ${starColors[key].swatch} ${
                color === key
                  ? 'scale-110 ring-2 ring-amber-100 ring-offset-2 ring-offset-indigo-950'
                  : 'opacity-60 hover:opacity-100'
              }`}
            />
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={text.trim() === ''}
        className="rounded-full bg-amber-200 px-8 py-3 font-semibold text-indigo-950 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Send to the stars
      </button>
    </form>
  )
}

export default WishForm