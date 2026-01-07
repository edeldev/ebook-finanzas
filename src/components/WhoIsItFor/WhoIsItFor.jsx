import { IconX, IconUser, IconUsers, IconHome } from "@tabler/icons-react";
import { Container, SubContainer } from "../layout";
import { HeadingTwo } from "../ui";

const forWho = [
  {
    id: 1,
    text: "Jóvenes que quieren salir adelante",
    icon: <IconUser size={18} />,
  },
  {
    id: 2,
    text: "Adultos que quieren corregir errores",
    icon: <IconUsers size={18} />,
  },
  {
    id: 3,
    text: "Padres que quieren un mejor futuro para sus hijos",
    icon: <IconHome size={18} />,
  },
];

const notForWho = [
  { id: 1, text: "Quienes buscan dinero rápido" },
  { id: 2, text: "Quienes no quieren cambiar hábitos" },
];

export const WhoIsItFor = () => {
  return (
    <Container>
      <HeadingTwo
        text={["Para quién es esta ", { value: "guía", highlight: true }]}
      />

      <SubContainer>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-container shadow-xl p-8">
            <h3 className="mb-6 text-lg font-semibold text-white">
              ✔ Sí es para:
            </h3>

            <ul className="space-y-4">
              {forWho.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-black shadow">
                      {item.icon}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-white">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-container border border-container/80 p-8">
            <h3 className="mb-6 text-lg font-semibold text-white">
              ❌ NO es para:
            </h3>

            <ul className="space-y-4">
              {notForWho.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
                      <IconX size={18} />
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-white">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SubContainer>
    </Container>
  );
};
