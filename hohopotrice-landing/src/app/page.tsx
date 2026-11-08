import { SITE } from '@/lib/site';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BeforeAfter } from '@/components/BeforeAfter';
import { Features } from '@/components/Features';
import { Faq } from '@/components/Faq';
import { CtaBanner } from '@/components/CtaBanner';
import { Footer } from '@/components/Footer';
import { MobileCta } from '@/components/MobileCta';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BeforeAfter />
        <Features />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <MobileCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
    </>
  );
}
