import { IconXboxXFilled } from "@tabler/icons-react";
import { Container, SubContainer } from "../layout";
import { HeadingTwo } from "../ui";

const problemSection = [
  { id: 1, text: "Trabajas duro pero el dinero nunca alcanza" },
  { id: 2, text: "Ganas más… pero sigues igual" },
  { id: 3, text: "Te preocupa el futuro de tus hijos" },
  { id: 4, text: "Nadie te enseñó a manejar el dinero" },
];

export const ProblemSection = () => {
  return (
    <Container>
      <HeadingTwo
        text={["¿Te parece ", { value: "familiar", highlight: true }, "?"]}
      />

      <SubContainer>
        <div className="space-y-3">
          {problemSection.map((problem) => (
            <div key={problem.id} className="flex gap-2 items-center">
              <div>
                <IconXboxXFilled color="red" size={30} />
              </div>
              <span className="text-base md:text-lg">{problem.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <span className="md:text-lg">
            No es falta de <span className="font-semibold">esfuerzo.</span>
          </span>
          <h3 className="text-lg md:text-2xl">
            Es falta de{" "}
            <span className="text-secondary font-semibold">
              educación financiera.
            </span>
          </h3>
        </div>
      </SubContainer>
    </Container>
  );
};
