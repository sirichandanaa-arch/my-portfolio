export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <div className="font-mono text-sm tracking-[0.25em] text-white">
          ASC<span className="text-cyan-400">.</span>
        </div>

        <div className="hidden gap-8 font-mono text-xs tracking-widest text-zinc-400 sm:flex">
          <a href="#work" className="transition-colors hover:text-cyan-400">
            WORK
          </a>

          <a href="#about" className="transition-colors hover:text-cyan-400">
            ABOUT
          </a>

          <a
            href="#experience"
            className="transition-colors hover:text-cyan-400"
          >
            EXPERIENCE
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-cyan-400"
          >
            SKILLS
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-cyan-400"
          >
            CONTACT
          </a>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          ONLINE
        </div>
      </nav>

      {/* =========================================================
          01 — HOME
      ========================================================= */}
      <section className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col justify-center px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mb-8 font-mono text-xs tracking-[0.35em] text-zinc-500">
          01 / 07
        </div>

        <div className="max-w-6xl">
          <p className="mb-5 font-mono text-sm tracking-[0.3em] text-cyan-400">
            DATA SCIENCE STUDENT
          </p>

          <h1 className="text-[clamp(3.5rem,11vw,10rem)] font-semibold leading-[0.85] tracking-[-0.06em]">
            AKULA
            <br />
            <span className="text-zinc-500">SIRI</span> CHANDANA
          </h1>

          <div className="mt-12 flex max-w-2xl items-start gap-4">
            <span className="mt-2 h-px w-10 shrink-0 bg-cyan-400" />

            <p className="max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl">
              Exploring AI, data, and the systems that turn information into
              insight.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#work"
              className="group flex items-center gap-3 border border-cyan-400 bg-cyan-400 px-6 py-3 font-mono text-xs font-semibold tracking-widest text-black transition-all hover:bg-transparent hover:text-cyan-400"
            >
              EXPLORE WORK
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 border border-zinc-700 px-6 py-3 font-mono text-xs tracking-widest text-zinc-300 transition-all hover:border-zinc-400 hover:text-white"
            >
              CONNECT ↗
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between font-mono text-[10px] tracking-widest text-zinc-600 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
          <div>
            <div>LOCATION</div>
            <div className="mt-1 text-zinc-400">INDIA</div>
          </div>

          <div className="hidden text-right sm:block">
            <div>FOCUS</div>
            <div className="mt-1 text-zinc-400">
              AI / ML · DATA · INTELLIGENT SYSTEMS
            </div>
          </div>

          <div className="text-right">
            <div>STATUS</div>
            <div className="mt-1 text-cyan-400">AVAILABLE TO BUILD</div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — IDENTITY
      ========================================================= */}
      <section
        id="about"
        className="relative z-10 border-t border-zinc-900 px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.35em] text-zinc-500">
              02 / 07
            </span>

            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400">
              IDENTITY
            </span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-zinc-600">
                WHO I AM
              </p>

              <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Curious.
                <br />
                <span className="text-zinc-600">Driven.</span>
                <br />
                Building.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-xl leading-9 text-zinc-400 sm:text-2xl">
                I&apos;m a Data Science student exploring the intersection of
                data, artificial intelligence, and software.
              </p>

              <p className="mt-6 max-w-2xl leading-8 text-zinc-600">
                I enjoy turning ideas into practical projects, learning new
                technologies, and using data to understand problems and build
                meaningful solutions.
              </p>

              <div className="mt-14 grid border-t border-zinc-800 sm:grid-cols-3">
                <div className="border-b border-zinc-800 py-6 sm:border-r sm:pr-6">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                    DEGREE
                  </p>

                  <p className="mt-3 text-lg text-white">
                    B.Tech Data Science
                  </p>
                </div>

                <div className="border-b border-zinc-800 py-6 sm:px-6">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                    INSTITUTION
                  </p>

                  <p className="mt-3 text-lg text-white">VNR VJIET</p>
                </div>

                <div className="py-6 sm:border-l sm:border-zinc-800 sm:pl-6">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
                    CGPA
                  </p>

                  <p className="mt-3 text-3xl font-semibold text-cyan-400">
                    9.375
                  </p>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4 font-mono text-xs tracking-widest">
                <span className="text-white">2024</span>

                <div className="h-px flex-1 bg-zinc-800">
                  <div className="h-px w-1/2 bg-cyan-400" />
                </div>

                <span className="text-zinc-600">2028</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — SELECTED WORK
      ========================================================= */}
      <section
        id="work"
        className="relative z-10 border-t border-zinc-900 px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.35em] text-zinc-500">
              03 / 07
            </span>

            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400">
              SELECTED WORK
            </span>
          </div>

          <div className="mt-14 max-w-4xl">
            <p className="font-mono text-xs tracking-[0.3em] text-zinc-600">
              PROJECT ARCHIVE
            </p>

            <h2 className="mt-5 text-6xl font-semibold tracking-[-0.05em] sm:text-8xl">
              THINGS
              <br />
              <span className="text-zinc-600">I&apos;VE BUILT.</span>
            </h2>
          </div>

          <div className="mt-14">

            {/* =========================
                PROJECT 01
            ========================= */}
            <article className="group border-t border-zinc-800 py-10 transition-colors hover:border-cyan-400">
              <div className="grid gap-8 lg:grid-cols-[120px_1fr_300px] lg:items-center">
                <div className="font-mono text-xs tracking-widest text-zinc-600">
                  001
                </div>

                <div>
                  <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-cyan-400 sm:text-4xl">
                    Heritage Guardian AI
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                    An AI-driven project focused on protecting and preserving
                    cultural heritage through technology and intelligent
                    solutions.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/GADADESI-HARSHITH/Heritage_Guardian_ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-zinc-700 px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                    >
                      GITHUB ↗
                    </a>

                    <a
                      href="https://heritage-guardian-ai-1.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-400 px-4 py-2 font-mono text-[10px] tracking-widest text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black"
                    >
                      LIVE DEMO ↗
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    AI
                  </span>
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    ML
                  </span>
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    HACKATHON
                  </span>
                </div>
              </div>
            </article>

            {/* =========================
                PROJECT 02
            ========================= */}
            <article className="group border-t border-zinc-800 py-10 transition-colors hover:border-cyan-400">
              <div className="grid gap-8 lg:grid-cols-[120px_1fr_300px] lg:items-center">
                <div className="font-mono text-xs tracking-widest text-zinc-600">
                  002
                </div>

                <div>
                  <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-cyan-400 sm:text-4xl">
                    MarketMind
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                    An AI-powered sales and marketing intelligence application
                    combining data, analytics, and generative AI to support
                    business decision-making.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/sirichandanaa-arch/MarketMind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-zinc-700 px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                    >
                      GITHUB ↗
                    </a>

                    <a
                      href="https://marketmind-ulti.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-400 px-4 py-2 font-mono text-[10px] tracking-widest text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black"
                    >
                      LIVE DEMO ↗
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    AI
                  </span>
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    PYTHON
                  </span>
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    ANALYTICS
                  </span>
                </div>
              </div>
            </article>

            {/* =========================
                PROJECT 03
            ========================= */}
            <article className="group border-t border-zinc-800 py-10 transition-colors hover:border-cyan-400">
              <div className="grid gap-8 lg:grid-cols-[120px_1fr_300px] lg:items-center">
                <div className="font-mono text-xs tracking-widest text-zinc-600">
                  003
                </div>

                <div>
                  <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-cyan-400 sm:text-4xl">
                    Energy Guard
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                    A data and AI-focused solution designed to monitor energy
                    usage and support smarter, more efficient consumption.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/sirichandanaa-arch/energy-guard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-zinc-700 px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                    >
                      GITHUB ↗
                    </a>

                    <a
                      href="https://energy-guard-ycos.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-400 px-4 py-2 font-mono text-[10px] tracking-widest text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black"
                    >
                      LIVE DEMO ↗
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    AI
                  </span>
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    DATA
                  </span>
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    SUSTAINABILITY
                  </span>
                </div>
              </div>
            </article>

            {/* =========================
                PROJECT 04
            ========================= */}
            <article className="group border-t border-zinc-800 py-10 transition-colors hover:border-cyan-400">
              <div className="grid gap-8 lg:grid-cols-[120px_1fr_300px] lg:items-center">
                <div className="font-mono text-xs tracking-widest text-zinc-600">
                  004
                </div>

                <div>
                  <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-cyan-400 sm:text-4xl">
                    Smart Irrigation Water Monitoring
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                    A smart monitoring system using water-quality sensors and
                    an ESP32 to assess conditions and control irrigation flow.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/sirichandanaa-arch/smart-irrigation-water-monitoring"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-zinc-700 px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                    >
                      GITHUB ↗
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    ESP32
                  </span>
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    IOT
                  </span>
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    WOKWI
                  </span>
                </div>
              </div>
            </article>

            {/* =========================
                PROJECT 05
            ========================= */}
            <article className="group border-t border-zinc-800 py-10 transition-colors hover:border-cyan-400">
              <div className="grid gap-8 lg:grid-cols-[120px_1fr_300px] lg:items-center">
                <div className="font-mono text-xs tracking-widest text-zinc-600">
                  005
                </div>

                <div>
                  <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-cyan-400 sm:text-4xl">
                    Smart Expense Splitter
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                    A practical application for simplifying shared expenses
                    and calculating how costs should be divided efficiently.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/sirichandanaa-arch/expense-splitter-python"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-zinc-700 px-4 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                    >
                      GITHUB ↗
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    SOFTWARE
                  </span>
                  <span className="border border-zinc-800 px-3 py-1 font-mono text-[10px] text-zinc-500">
                    LOGIC
                  </span>
                </div>
              </div>
            </article>

            <div className="flex items-center justify-between border-t border-zinc-800 py-8 font-mono text-[10px] tracking-widest text-zinc-600">
              <span>END OF PROJECT ARCHIVE</span>
              <span className="text-cyan-400">05 PROJECTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — EXPERIENCE
      ========================================================= */}
      <section
        id="experience"
        className="relative z-10 border-t border-zinc-900 px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.35em] text-zinc-500">
              04 / 07
            </span>

            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400">
              EXPERIENCE
            </span>
          </div>

          <div className="mt-14 max-w-4xl">
            <p className="font-mono text-xs tracking-[0.3em] text-zinc-600">
              CURRENTLY LEARNING &amp; BUILDING
            </p>

            <h2 className="mt-5 text-6xl font-semibold tracking-[-0.05em] sm:text-8xl">
              WHERE
              <br />
              <span className="text-zinc-600">I&apos;M GROWING.</span>
            </h2>
          </div>

          <div className="mt-14">
            <article className="group border-t border-cyan-400 py-10">
              <div className="grid gap-8 lg:grid-cols-[120px_1fr_260px] lg:items-start">
                <div className="font-mono text-xs tracking-widest text-cyan-400">
                  001
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      Vipany Global Solutions Pvt. Ltd.
                    </h3>

                    <span className="border border-cyan-400/40 px-2 py-1 font-mono text-[9px] tracking-widest text-cyan-400">
                      CURRENT
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-sm tracking-widest text-zinc-400">
                    DATA SCIENCE &amp; WEB DEVELOPMENT INTERN
                  </p>

                  <p className="mt-5 max-w-2xl leading-7 text-zinc-600">
                    An offline internship focused on gaining practical
                    experience across data science and web development.
                  </p>
                </div>

                <div className="font-mono text-xs tracking-widest text-zinc-500 lg:text-right">
                  <div>12 JUN 2026</div>
                  <div className="my-2 text-zinc-700">↓</div>
                  <div className="text-cyan-400">12 SEP 2026</div>
                  <div className="mt-4 text-zinc-600">OFFLINE</div>
                </div>
              </div>
            </article>

            <article className="group border-t border-zinc-800 py-10">
              <div className="grid gap-8 lg:grid-cols-[120px_1fr_260px] lg:items-start">
                <div className="font-mono text-xs tracking-widest text-zinc-600">
                  002
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      BeeSkilled
                    </h3>

                    <span className="border border-zinc-700 px-2 py-1 font-mono text-[9px] tracking-widest text-zinc-500">
                      CURRENT
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-sm tracking-widest text-zinc-400">
                    DATA ANALYST INTERN
                  </p>

                  <p className="mt-5 max-w-2xl leading-7 text-zinc-600">
                    A remote internship focused on developing practical
                    experience in data analysis.
                  </p>
                </div>

                <div className="font-mono text-xs tracking-widest text-zinc-500 lg:text-right">
                  <div>13 JUL 2026</div>
                  <div className="my-2 text-zinc-700">↓</div>
                  <div className="text-zinc-400">24 AUG 2026</div>
                  <div className="mt-4 text-zinc-600">REMOTE</div>
                </div>
              </div>
            </article>

            <article className="group border-t border-zinc-800 py-10">
              <div className="grid gap-8 lg:grid-cols-[120px_1fr_260px] lg:items-start">
                <div className="font-mono text-xs tracking-widest text-zinc-600">
                  003
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      Bluestock Fintech
                    </h3>

                    <span className="border border-zinc-700 px-2 py-1 font-mono text-[9px] tracking-widest text-zinc-500">
                      CURRENT
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-sm tracking-widest text-zinc-400">
                    DATA ANALYST INTERN
                  </p>

                  <p className="mt-5 max-w-2xl leading-7 text-zinc-600">
                    A remote internship focused on gaining practical
                    experience in data analysis.
                  </p>
                </div>

                <div className="font-mono text-xs tracking-widest text-zinc-500 lg:text-right">
                  <div>24 JUL 2026</div>
                  <div className="my-2 text-zinc-700">↓</div>
                  <div className="text-zinc-400">24 SEP 2026</div>
                  <div className="mt-4 text-zinc-600">REMOTE</div>
                </div>
              </div>
            </article>

            <div className="border-t border-zinc-800 py-8 font-mono text-[10px] tracking-widest text-zinc-600">
              <div className="flex items-center justify-between">
                <span>INTERNSHIPS IN PROGRESS</span>
                <span className="text-cyan-400">03 ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — ACHIEVEMENTS
      ========================================================= */}
      <section
        id="achievements"
        className="relative z-10 border-t border-zinc-900 px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.35em] text-zinc-500">
              05 / 07
            </span>

            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400">
              ACHIEVEMENTS
            </span>
          </div>

          <div className="mt-14 max-w-4xl">
            <p className="font-mono text-xs tracking-[0.3em] text-zinc-600">
              SELECTED CREDENTIALS
            </p>

            <h2 className="mt-5 text-6xl font-semibold tracking-[-0.05em] sm:text-8xl">
              PROOF OF
              <br />
              <span className="text-zinc-600">LEARNING.</span>
            </h2>

            <p className="mt-8 max-w-2xl leading-8 text-zinc-500">
              Selected certifications, technical programs, hackathons, and
              learning experiences supporting my journey in AI, data science,
              and technology.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
  {/* Certificate 01 */}
  <div className="border-t border-zinc-800 pt-6">
    <p className="font-mono text-xs tracking-widest text-cyan-400">
      01
    </p>

    <h3 className="mt-4 text-xl font-semibold">
      Google Cloud Gen AI Academy APAC 2026
    </h3>

    <p className="mt-2 text-sm text-zinc-600">
      Google Cloud × Hack2Skill
    </p>

    <a
      href="/certificates/google-cloud-gen-ai.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
    >
      VIEW CERTIFICATE ↗
    </a>
  </div>

  {/* Certificate 02 */}
  <div className="border-t border-zinc-800 pt-6">
    <p className="font-mono text-xs tracking-widest text-cyan-400">
      02
    </p>

    <h3 className="mt-4 text-xl font-semibold">
      Introduction to Internet of Things
    </h3>

    <p className="mt-2 text-sm text-zinc-600">
      NPTEL / IIT Kharagpur · 80%
    </p>

    <a
      href="/certificates/iot-nptel.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
    >
      VIEW CERTIFICATE ↗
    </a>
  </div>

  {/* Certificate 03 */}
  <div className="border-t border-zinc-800 pt-6">
    <p className="font-mono text-xs tracking-widest text-cyan-400">
      03
    </p>

    <h3 className="mt-4 text-xl font-semibold">
      Explore Machine Learning using Python
    </h3>

    <p className="mt-2 text-sm text-zinc-600">
      Infosys Springboard
    </p>

    <a
      href="/certificates/machine-learning-python.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
    >
      VIEW CERTIFICATE ↗
    </a>
  </div>

  {/* Certificate 04 */}
  <div className="border-t border-zinc-800 pt-6">
    <p className="font-mono text-xs tracking-widest text-cyan-400">
      04
    </p>

    <h3 className="mt-4 text-xl font-semibold">
      Software Engineering Job Simulation
    </h3>

    <p className="mt-2 text-sm text-zinc-600">
      JPMorgan Chase &amp; Co. / Forage
    </p>

    <a
      href="/certificates/software-engineering-jpmc.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
    >
      VIEW CERTIFICATE ↗
    </a>
  </div>

  {/* Certificate 05 */}
  <div className="border-t border-zinc-800 pt-6">
    <p className="font-mono text-xs tracking-widest text-cyan-400">
      05
    </p>

    <h3 className="mt-4 text-xl font-semibold">
      Introduction to Generative AI
    </h3>

    <p className="mt-2 text-sm text-zinc-600">
      IBM SkillsBuild
    </p>

    <a
      href="/certificates/generative-ai-ibm.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
    >
      VIEW CERTIFICATE ↗
    </a>
  </div>

  {/* Certificate 06 */}
  <div className="border-t border-zinc-800 pt-6">
    <p className="font-mono text-xs tracking-widest text-cyan-400">
      06
    </p>

    <h3 className="mt-4 text-xl font-semibold">
      Data Visualization using Tableau
    </h3>

    <p className="mt-2 text-sm text-zinc-600">
      Udemy
    </p>

    <a
      href="/certificates/tableau.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 border border-zinc-700 px-3 py-2 font-mono text-[10px] tracking-widest text-zinc-400 transition-all hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
    >
      VIEW CERTIFICATE ↗
    </a>
  </div>
</div>
            

           
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — SKILLS
      ========================================================= */}
      <section
        id="skills"
        className="relative z-10 border-t border-zinc-900 px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.35em] text-zinc-500">
              06 / 07
            </span>

            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400">
              SKILLS
            </span>
          </div>

          <div className="mt-14 max-w-4xl">
            <p className="font-mono text-xs tracking-[0.3em] text-zinc-600">
              TECHNICAL TOOLKIT
            </p>

            <h2 className="mt-5 text-6xl font-semibold tracking-[-0.05em] sm:text-8xl">
              WHAT I
              <br />
              <span className="text-zinc-600">WORK WITH.</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-px bg-zinc-800 md:grid-cols-2">
            <div className="bg-[#050505] p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-cyan-400">
                  01
                </span>
                <span className="font-mono text-[10px] tracking-widest text-zinc-600">
                  DATA
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">Data Science</h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Python",
                  "NumPy",
                  "Pandas",
                  "Matplotlib",
                  "Seaborn",
                  "Statistics",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-zinc-800 px-4 py-2 font-mono text-xs text-zinc-400 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#050505] p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-cyan-400">
                  02
                </span>
                <span className="font-mono text-[10px] tracking-widest text-zinc-600">
                  INTELLIGENCE
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Machine Learning &amp; AI
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Machine Learning",
                  "Scikit-learn",
                  "Generative AI",
                  "LLM Fundamentals",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-zinc-800 px-4 py-2 font-mono text-xs text-zinc-400 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#050505] p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-cyan-400">
                  03
                </span>
                <span className="font-mono text-[10px] tracking-widest text-zinc-600">
                  INSIGHT
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Data &amp; Visualization
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "SQL",
                  "Tableau",
                  "Power BI",
                  "Data Visualization",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-zinc-800 px-4 py-2 font-mono text-xs text-zinc-400 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#050505] p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-cyan-400">
                  04
                </span>
                <span className="font-mono text-[10px] tracking-widest text-zinc-600">
                  BUILD
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Programming &amp; Tools
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Java",
                  "Git",
                  "GitHub",
                  "Jupyter Notebook",
                  "VS Code",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-zinc-800 px-4 py-2 font-mono text-xs text-zinc-400 transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-zinc-800 py-8">
            <span className="font-mono text-[10px] tracking-widest text-zinc-600">
              CONTINUOUSLY LEARNING
            </span>

            <span className="font-mono text-[10px] tracking-widest text-cyan-400">
              DATA · AI · BUILD
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          07 — CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="relative z-10 min-h-[60vh] border-t border-zinc-900 px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.35em] text-zinc-500">
              07 / 07
            </span>

            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400">
              CONTACT
            </span>
          </div>

          <div className="mt-16">
            <p className="font-mono text-xs tracking-[0.3em] text-zinc-600">
              TRANSMISSION
            </p>

            <h2 className="mt-5 text-6xl font-semibold tracking-[-0.05em] sm:text-8xl">
              LET&apos;S
              <br />
              <span className="text-zinc-600">CONNECT.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-500">
              Have an opportunity, idea, or project worth discussing?
              I&apos;d love to hear from you.
            </p>

            {/* Contact buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/akula-siri-chandana-94308931b/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 bg-cyan-400 px-6 py-3 font-mono text-xs font-semibold tracking-widest text-black transition-all hover:bg-transparent hover:text-cyan-400"
              >
                LINKEDIN ↗
              </a>

              <a
                href="https://github.com/sirichandanaa-arch"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 px-6 py-3 font-mono text-xs tracking-widest text-zinc-300 transition-all hover:border-zinc-400 hover:text-white"
              >
                GITHUB ↗
              </a>

              <a
                href="mailto:siriakula2006@gmail.com"
                className="border border-zinc-700 px-6 py-3 font-mono text-xs tracking-widest text-zinc-300 transition-all hover:border-zinc-400 hover:text-white"
              >
                EMAIL ↗
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 px-6 py-3 font-mono text-xs tracking-widest text-zinc-300 transition-all hover:border-zinc-400 hover:text-white"
              >
                RESUME ↗
              </a>
            </div>

            {/* Email display */}
            <div className="mt-16 border-t border-zinc-800 pt-8">
              <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-600">
                EMAIL
              </p>

              <a
                href="mailto:siriakula2006@gmail.com"
                className="mt-3 inline-block text-lg text-zinc-300 transition-colors hover:text-cyan-400 sm:text-xl"
              >
                siriakula2006@gmail.com
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-24 border-t border-zinc-800 pt-8">
            <div className="flex flex-col justify-between gap-4 font-mono text-[10px] tracking-widest text-zinc-600 sm:flex-row">
              <span>AKULA SIRI CHANDANA</span>

              <span>DATA SCIENCE · AI · INTELLIGENT SYSTEMS</span>

              <span>© 2026</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}