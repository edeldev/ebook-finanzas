import { IconCircleCheckFilled } from "@tabler/icons-react";
import { Container, SubContainer } from "../layout";
import { Caption, HeadingTwo, HeadingTwoBackground } from "../ui";

export const SolutionSection = () => {
  return (
    <Container>
      <HeadingTwo
        text={[
          "La ",
          { value: "regla", highlight: true },
          " simple que ",
          { value: "casi nadie aplica", highlight: true },
        ]}
      />

      <Caption caption="No necesitas ser experto. No necesitas ser rico." />

      <HeadingTwoBackground text="Solo necesitas una regla clara:" />

      <SubContainer>
        <div className="flex gap-2 justify-center md:items-start">
          <div>
            <IconCircleCheckFilled className="text-green-500" size={30} />
          </div>
          <span className="text-base md:text-lg">
            Asegura el 20% de todo lo que ganes y úsalo para construir, no para
            aparentar.
          </span>
        </div>
      </SubContainer>
    </Container>
  );
};
