import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import BasicContact from '@/components/BasicContact';
import CTA from '@/components/CTA';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div>
      {router.pathname !== '/portfolio' && <Banner />}
      {router.pathname !== '/' && <Navbar />}
      <Component {...pageProps} />
      {router.pathname !== '/' && router.pathname !== '/contact-us' && <CTA />}
      {router.pathname !== '/contact-us' && <BasicContact />}
      <Footer />
    </div>
  )
}
