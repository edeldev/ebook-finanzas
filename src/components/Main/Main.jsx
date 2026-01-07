export const Main = () => {
  return (
    <main>
      <section className="flex-col text-white xl:h-dvh lg:max-h-225 min-[1600px]:w-auto mx-auto min-[1600px]:rounded-[3px] max-h-165 min-h-125 relative flex items-center justify-center w-full overflow-hidden rounded-none">
        <img
          src="/background.webp"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-32 w-full bg-linear-to-t from-black to-transparent" />

        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/50 to-black/80" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
          <span className="mb-4 inline-block text-xs tracking-widest uppercase text-secondary">
            Educación financiera
          </span>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold text-white">
            El <span className="text-secondary">20%</span> que cambia tu vida
          </h1>

          <p className="mt-6 text-sm md:text-base text-gray-200 max-w-xl leading-relaxed">
            La guía de educación financiera que ayuda a jóvenes, adultos y
            padres a construir estabilidad, casa y futuro{" "}
            <span className="font-medium text-white">sin ganar más dinero</span>
            .
          </p>

          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-secondary/80 hover:scale-105 hover:shadow-xl"
            >
              Obtener la guía
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
