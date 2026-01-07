import { IconCheck } from "@tabler/icons-react";
import { Container, SubContainer } from "../layout";
import { HeadingTwo } from "../ui";

const includesEbook = [
  { id: 1, text: "Por qué la mayoría vive al día" },
  { id: 2, text: "Cómo aplicar la regla del 20%" },
  { id: 3, text: "Aprender a decir NO a gastos que te atrasan" },
  { id: 4, text: "Cómo llegar antes a casa y estabilidad" },
  { id: 5, text: "Qué hacer con ese 20% sin tecnicismos" },
  { id: 6, text: "Cómo enseñar dinero a tus hijos" },
];

export const IncludesEbook = () => {
  return (
    <Container>
      <HeadingTwo
        text={["¿Qué incluye la ", { value: "guía", highlight: true }, "?"]}
      />

      <SubContainer>
        <div className="mx-auto max-w-3xl rounded-3xl bg-container shadow-2xl p-8 md:p-10">
          <ul className="space-y-5">
            {includesEbook.map((include) => (
              <li
                key={include.id}
                className="flex items-start gap-4 text-white"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-black shadow">
                  <IconCheck size={16} stroke={3} />
                </span>

                <p className="text-sm md:text-base leading-relaxed">
                  {include.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-secondary px-10 py-4 text-sm md:text-base font-semibold text-black transition-all duration-300 hover:bg-secondary/80 hover:scale-105 hover:shadow-xl"
            >
              Obtener guía
            </a>
          </div>
        </div>
      </SubContainer>
    </Container>
  );
};
