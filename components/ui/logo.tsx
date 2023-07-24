import Link from 'next/link'
import Image from 'next/image'
import FeaturesBg from 'components/ui/logo.png'
import FeaturesElement from '@/public/images/features-element.png'
export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
  <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={200} height="62" alt="Features bg" />
    </Link>
  )
}
