import { About } from "./_components/about";
import { Board } from "./_components/board";
import { Contact } from "./_components/contact";
import { Events } from "./_components/events";
import { Hero } from "./_components/hero";
import { Sponsors } from "./_components/sponsors";
import { Tape } from "./_components/tape";

export const revalidate = 3600;

export default function Home() {
  return (
    <main>
      <Hero />
      <Tape />
      <About />
      <Events />
      <Board />
      <Sponsors />
      <Contact />
    </main>
  );
}
