import { useEffect, useState } from 'react'
import WishForm from './WishForm'
import Sky from './Sky'
import type { StarColor, Wish } from '../types/wish'

const STORAGE_KEY = 'wish-upon-a-star:wishes'

function loadWishes(): Wish[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? (JSON.parse(saved) as Wish[]) : []
  } catch {
    return []
  }
}

function WishSection() {
  const [wishes, setWishes] = useState<Wish[]>(loadWishes)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [shotKey, setShotKey] = useState<number>(0)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes))
  }, [wishes])

  const handleSend = (text: string, color: StarColor) => {
    const newWish: Wish = {
      id: Date.now(),
      text,
      color,
      x: 5 + Math.random() * 90,
      y: 5 + Math.random() * 70,
    }
    setWishes((current) => [...current, newWish])
    setSelectedId(newWish.id)
    setShotKey((k) => k + 1)
  }

  const handleClear = () => {
    setWishes([])
    setSelectedId(null)
  }

  return (
    <>
      <section id="wish" className="scroll-mt-10 px-6 py-24">
        <h2 className="font-display text-center text-4xl font-semibold text-amber-200">
          Your Wish
        </h2>
        <p className="mt-3 mb-10 text-center text-indigo-200">
          Write it down, pick a color, and send it up.
        </p>
        <WishForm onSend={handleSend} />
      </section>

      <section id="sky" className="scroll-mt-10 px-6 pb-24">
        <h2 className="font-display mb-2 text-center text-4xl font-semibold text-amber-200">
          Your Sky
        </h2>
        <p className="mb-10 text-center text-indigo-200">
          {wishes.length} {wishes.length === 1 ? 'wish' : 'wishes'} shining. Tap a star to read it.
        </p>
        <Sky
          wishes={wishes}
          selectedId={selectedId}
          onSelect={setSelectedId}
          shotKey={shotKey}
        />

        {wishes.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={handleClear}
              className="rounded-full border border-indigo-300/30 px-6 py-2 text-sm font-semibold text-indigo-200 transition hover:bg-indigo-900/60"
            >
              Clear sky
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default WishSection