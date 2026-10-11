import sky from '../assets/images/sky.jpg'
import Star from './Star'
import type { Wish } from '../types/wish'
import { starColors } from '../data/starColors'

type SkyProps = {
  wishes: Wish[]
  selectedId: number | null
  onSelect: (id: number) => void
  shotKey: number
}

function Sky({ wishes, selectedId, onSelect, shotKey }: SkyProps) {
  const selected = wishes.find((w) => w.id === selectedId)

  return (
    <div className="relative mx-auto h-[60vh] min-h-96 max-w-5xl overflow-hidden rounded-3xl border border-amber-200/20">
      <img
        src={sky}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-indigo-950/40" />

      {shotKey > 0 && (
        <div
          key={shotKey}
          className="animate-shoot absolute top-6 right-8 h-0.5 w-28 -rotate-45 rounded-full bg-gradient-to-l from-transparent to-white"
        />
      )}

      {wishes.length === 0 && (
        <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-indigo-200">
          The sky is quiet. Send a wish and it will appear here.
        </p>
      )}

      {wishes.map((wish) => (
        <Star
          key={wish.id}
          wish={wish}
          isSelected={wish.id === selectedId}
          onSelect={onSelect}
        />
      ))}

      {selected && (
        <div
          key={selected.id}
          className="animate-fade-up absolute inset-x-4 bottom-4 mx-auto max-w-md rounded-2xl border border-amber-200/30 bg-indigo-950/80 p-4 text-center backdrop-blur"
        >
          <p className={`text-xs font-semibold uppercase tracking-widest ${starColors[selected.color].fill}`}>
            A {starColors[selected.color].label.toLowerCase()} wish
          </p>
          <p className="mt-2 text-lg text-indigo-50">{selected.text}</p>
        </div>
      )}
    </div>
  )
}

export default Sky