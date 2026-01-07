import { Container, SubContainer } from "../layout";
import { Caption, HeadingTwoBackground } from "../ui";

export const Authority = () => {
  return (
    <Container>
      <HeadingTwoBackground text="Esta guía no nace de teorías." />

      <SubContainer>
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-lg">
            Nace de errores{" "}
            <span className="text-secondary font-semibold">reales</span>
          </p>
          <p className="text-lg">
            <span className="text-secondary font-semibold">Romper ciclos</span>{" "}
            financieros familiares
          </p>
          <p className="text-lg">Aprendizaje</p>
        </div>
      </SubContainer>
      <Caption caption="No es una guía para hacerse rico. Es una guía para no volver a empezar desde cero." />
    </Container>
  );
};
