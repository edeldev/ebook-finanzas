import {
  IconDownload,
  IconBook,
  IconRefresh,
  IconBolt,
} from "@tabler/icons-react";
import { Container, SubContainer } from "../layout";
import { HeadingTwo } from "../ui";

export const Price = () => {
  return (
    <Container>
      <HeadingTwo text={["Precio"]} />

      <SubContainer>
        <div className="rounded-3xl bg-container shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <img
                src="/ebook.webp"
                alt="Portada del ebook"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center items-center">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-secondary/20 px-4 py-1 text-xs font-semibold text-secondary">
                <IconBolt size={14} />
                Acceso inmediato a la guía
              </span>

              <div>
                <p className="text-sm text-gray-300">Precio especial</p>
                <p className="mt-2 text-5xl font-bold text-white">
                  $9{" "}
                  <span className="text-lg font-medium text-gray-400">USD</span>
                </p>
              </div>

              <ul className="mt-8 flex flex-col gap-4">
                <li className="flex items-center gap-3 text-gray-200">
                  <IconDownload size={18} className="text-secondary" />
                  Descarga inmediata
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <IconBook size={18} className="text-secondary" />
                  Lectura rápida
                </li>
                <li className="flex items-center gap-3 text-gray-200">
                  <IconRefresh size={18} className="text-secondary" />
                  Releíble siempre
                </li>
              </ul>

              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-full bg-secondary px-8 py-4 text-sm md:text-base font-semibold text-black transition-all duration-300 hover:bg-secondary/80 hover:scale-[1.03] hover:shadow-2xl"
                >
                  👉 Quiero empezar hoy
                </a>
              </div>

              <p className="mt-4 text-xs text-gray-400 text-center">
                Pago seguro · Acceso inmediato · Pago único
              </p>
            </div>
          </div>
        </div>
      </SubContainer>
    </Container>
  );
};
