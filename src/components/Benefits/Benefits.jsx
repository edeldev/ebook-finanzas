import { IconCheck } from "@tabler/icons-react";
import { Container, SubContainer } from "../layout";
import { HeadingTwoBackground } from "../ui";

const benefits = [
  {
    id: 1,
    text: "Tendrás control sobre tu dinero",
  },
  {
    id: 2,
    text: "Dejarás de vivir con estrés financiero",
  },
  {
    id: 3,
    text: "Empezarás a construir patrimonio",
  },
  {
    id: 4,
    text: "Tendrás claridad para guiar a tu familia",
  },
];

export const Benefits = () => {
  return (
    <Container>
      <HeadingTwoBackground text="Beneficios claros" />

      <SubContainer className="pt-4 md:pt-12">
        <div className="mx-auto max-w-4xl rounded-3xl bg-container p-8 md:p-12 shadow-2xl">
          <ul className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit.id}
                className="flex items-start gap-4 rounded-2xl bg-[#232323] p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-black shadow">
                  <IconCheck size={18} stroke={3} />
                </span>

                <p className="text-sm md:text-base text-white leading-relaxed">
                  {benefit.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </SubContainer>
    </Container>
  );
};
