'use client';

import { About } from '@/containers/About';
import { Banner } from '@/containers/Banner';
import { Contact } from '@/containers/Contact';
import { Projects } from '@/containers/Projects';
import { Skills } from '@/containers/Skills';

export default function Home() {
  return (
    <>
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
