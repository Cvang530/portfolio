import Image from 'next/image'
import HeaderSection from './Components/headers'
import Navbar from './Components/navBar'
import AboutSection from './Components/aboutSection'
import ProjectSection from './Components/projectSection'
import ContactSection from './Components/contactSection'
import Footer from './Components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* <section className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('/images/background.png')` }}
      > */}
      <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeaderSection />
          <AboutSection />
          <ProjectSection />
          <ContactSection />
        </div>
        <Footer />
      {/* </section> */}
    </main>
  )
}
