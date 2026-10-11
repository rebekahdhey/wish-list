import sky from '../assets/images/sky.jpg'

type HeroProps = {
  title: string
  subtitle: string
}

function Hero({ title, subtitle }: HeroProps) {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      <img
        src={sky}
        alt="A dreamy night sky full of stars"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-indigo-950/40 to-indigo-950" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        
        <h1 className="text-5xl font-bold tracking-wide text-amber-200 drop-shadow-[0_0_20px_rgba(253,230,138,0.5)] md:text-7xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-indigo-100">{subtitle}</p>

        <a
          href="#wish"
          className="mt-8 rounded-full border border-amber-200/60 bg-amber-200/10 px-8 py-3 font-semibold text-amber-200 backdrop-blur transition hover:bg-amber-200 hover:text-indigo-950"
        >
          Make a wish
        </a>
      </div>
    </header>
  )
}

export default Hero