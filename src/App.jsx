import Hero from "./components/Hero"
import About from "./components/About"
import Navar from "./components/Navbar"
import Features from "./components/Features"
import Story from "./components/Story"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  )
}

export default App