import Image from 'next/image'
import HeaderSection from './Components/headers'
import Navbar from './Components/navBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
        <container className="container mt-24 mx-auto px-12 py-4">
          <HeaderSection />
        </container>
    </main>
  )
}
