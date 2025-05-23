import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Project";

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* Main Container */}
      <div className="flex flex-col gap-20 px-6 sm:px-10 md:px-20">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center">
          <Hero />
        </section>

        {/* Skills Section */}
        <section className="flex flex-col items-center justify-center">
          <Skills />
        </section>
            <Projects/>
      </div>
    </main>
  );
}
