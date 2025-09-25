import Hero from "./components/Hero"
import About from "./components/About"
import Navar from "./components/Navbar"
import Features from "./components/Features"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App