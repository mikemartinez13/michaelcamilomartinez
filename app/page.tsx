import Image from "next/image";

const link =
  "text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-accent hover:text-accent";

function Section({
  title,
  delay,
  children,
}: {
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <section
      className="rise border-t border-line py-10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h2 className="mb-5 text-sm uppercase tracking-[0.18em] text-muted">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Two-column panel: photo left (fixed aspect ratio, vertically centered), about text right */}
      <header className="rise flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
        <Image
          src="/fun_pic-modified.png"
          alt="Michael Martinez in Sydney"
          width={896}
          height={896}
          priority
          sizes="(min-width: 640px) 448px, 100vw"
          className="h-auto w-full max-w-sm shrink-0 self-center sm:w-[448px] sm:max-w-none"
        />
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Michael C. Martinez
          </h1>
          <p className="mt-3 text-lg text-muted">CS @ UVA · incoming MS student</p>
          <div className="mt-5 space-y-4 leading-relaxed text-foreground/90">
            <p>
              I&apos;m an MS student at UVA working with{" "}
              <a className={link} href="https://nandofioretto.github.io/">Prof. Nando Fioretto</a>{" "}
              on generative frameworks to aid in the discovery of inorganic materials and various configurations. 
              Previously, I
              studied math and data science at William &amp; Mary, where I worked with{" "}
              <a className={link} href="https://haipeng-chen.github.io/">Prof. Haipeng Chen</a> in
              the Data-Driven Intelligence (D3i) Lab on diffusion language models, and with{" "}
              <a className={link} href="https://cristianofanelli.com/">Prof. Cristiano Fanelli</a>{" "}
              on generative modeling for Imaging Cherenkov Detectors (including JLab GlueX and the
              high-performance DIRC). I also wrote and defended my undergrad thesis with him.
            </p>
            <p>
              I&apos;m broadly interested in generative modeling for scientific and natural language
              domains, especially generative modeling with physical constraints, whether through projection operators
              or through architecture design. I&apos;ve spent most of my time
              on diffusion models, flow matching models, and variants such as MDMs, and I&apos;ve
              deployed computer vision and object detection models at hackathons.
            </p>
            <p>Outside of research I like reading, running, swimming, and hiking.</p>
          </div>
          <nav className="mt-6 flex gap-5 text-sm">
            <a className={link} href="/Michael_Martinez_CV_0726.pdf">CV</a>
            <a className={link} href="https://github.com/mikemartinez13">GitHub</a>
            <a className={link} href="https://strava.app.link/uUsvAFQHgZb">Strava</a>
          </nav>
        </div>
      </header>

      <div className="mt-12">

        <Section title="Publications" delay={200}>
          <article className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <Image
              src="/cherenkov.png"
              alt="Cherenkov detector simulation"
              width={400}
              height={280}
              className="h-auto w-full shrink-0 self-center rounded-lg border border-line sm:w-44"
            />
            <div>
              <span className="rounded bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
                MLST 2025
              </span>
              <h3 className="mt-2 font-serif text-xl leading-snug">
                Generative models for fast simulation of Cherenkov detectors at the electron-ion
                collider
              </h3>
              <p className="mt-2 text-sm text-muted">
                James Giroux, <span className="text-foreground">Michael Martinez</span>, Cristiano
                Fanelli · <i>Machine Learning: Science &amp; Technology</i>
              </p>
              <p className="mt-3 flex gap-4 text-sm">
                <a className={link} href="https://iopscience.iop.org/article/10.1088/2632-2153/ae0f72/pdf">Paper</a>
                <a className={link} href="https://github.com/wmdataphys/Deep_hpDIRC">Code</a>
              </p>
            </div>
          </article>
        </Section>

        <Section title="Experience" delay={280}>
          <ul className="space-y-4">
            {[
              ["Graduate Researcher", "RAISE Lab", "May – present · Charlottesville, VA"],
              ["Quant Risk Intern", "Lazard Asset Management", "Jun–Aug 2025 · New York, NY"],
              ["Data Engineering Intern", "Johns Hopkins Supply Chain", "Jun–Aug 2024 · Baltimore, MD"],
            ].map(([role, org, when]) => (
              <li key={role} className="flex flex-col sm:flex-row sm:justify-between">
                <span>
                  {role} <span className="text-muted">· {org}</span>
                </span>
                <span className="text-sm text-muted">{when}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
