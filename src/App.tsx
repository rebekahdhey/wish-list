import Hero from './components/Hero'
import WishSection from './components/WishSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-indigo-950">
      <Hero
        title="Wish Upon a Star"
        subtitle="Whisper a wish into the night and watch it become a star."
      />
      <WishSection />
      <Footer />
    </div>
  )
}

export default App