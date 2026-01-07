import { Container, SubContainer } from "../layout";
import { AnimatedTestimonials, HeadingTwo } from "../ui";

const testimonials = [
  {
    quote:
      "Por primera vez entendí el dinero sin sentirme tonto. Todo está explicado de forma clara y real.",
    name: "Carlos",
    designation: "29 años",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Ahora sé cómo hablar de dinero con mis hijos y guiarlos para que no repitan mis errores.",
    name: "Mariana Rodriguez",
    designation: "Mama",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Simple, directo y real. Esta guía me hizo ver errores que repetía sin darme cuenta y me dio un plan claro para cambiar.",
    name: "Luis",
    designation: "Empleado",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const Testimonial = () => {
  return (
    <Container>
      <HeadingTwo text={["Testimonios"]} />

      <SubContainer>
        <AnimatedTestimonials testimonials={testimonials} />
      </SubContainer>
    </Container>
  );
};
