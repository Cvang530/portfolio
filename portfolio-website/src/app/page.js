'use client';
import HeaderSection from './Components/headers'
import Navbar from './Components/navBar'
import AboutSection from './Components/aboutSection'
import ProjectSection from './Components/projectSection'
import ContactSection from './Components/contactSection'
import Footer from './Components/footer'
import ParticlesContainer from './Components/particles';
import { Parallax } from 'react-parallax';

export default function Home() {
  return (
    <Parallax>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <ParticlesContainer />
          <div className="container mt-24 mx-auto px-12 py-4 z-0">
            <HeaderSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </div>
          <Footer />
      </main>
    </Parallax>
  )
}
