import Image from 'next/image'
import  LandingPage  from './LandingPage/page'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingPage/>
    </main>
  )
}