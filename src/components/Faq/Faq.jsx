"use client";

import { useState } from "react";
import { Container } from "../layout";
import { Accordeon } from "./components";

const faqItems = [
  {
    question: "¿En qué formato viene el libro?",
    answer:
      "El libro viene en formato PDF, optimizado para leer en cualquier dispositivo: celular, tablet o computadora. También puedes imprimirlo si lo prefieres.",
  },
  {
    question: "¿Cuándo recibiré el libro?",
    answer:
      "Inmediatamente después de tu compra recibirás un correo con el enlace de descarga. No tienes que esperar envíos físicos.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="grid grid-cols-12 gap-6">
        <div className="relative col-span-12 md:col-span-3 w-fit h-fit mx-auto">
          <h3 className="z-10 text-8xl md:text-9xl font-bold text-secondary">
            FAQ
          </h3>

          <div className="pointer-events-none absolute top-0 left-0 h-16 w-full bg-linear-to-b from-black to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-linear-to-t from-black to-transparent" />

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <span className="text-xl font-bold drop-shadow-lg text-white leading-1">
              Preguntas frecuentes
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9 space-y-3">
          {faqItems.map((item, index) => (
            <Accordeon
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
