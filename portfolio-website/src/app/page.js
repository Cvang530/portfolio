import Image from 'next/image'
import HeaderSection from './Components/headers'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <container className="container mx-auto px-12 py-4">
        <HeaderSection />
      </container>
    </main>
  )
}
