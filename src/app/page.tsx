import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import ScrollingText from "@/components/sections/ScrollingText"
import About from "@/components/sections/About"
import Gallery from "@/components/sections/Gallery"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <ScrollingText />
      <About />
      <Gallery />
      <Contact />
    </Layout>
  )
}
