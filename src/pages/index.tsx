import HomeContent from '@/components/HomeContent'
import HomePage from '@/components/HomePage'
import HomeSimpleContent from '@/components/HomeSimpleContent'
import ThreePromises from '@/components/ThreePromises'

export default function Home() {
  return (
    <div>
    <HomePage />
    <ThreePromises />
    <HomeContent />
    <HomeSimpleContent />
    </div>
  )
}
