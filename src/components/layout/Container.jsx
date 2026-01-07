export const Container = ({ children, className }) => {
  return (
    <section
      className={`py-6 md:py-10 px-6 container mx-auto space-y-8 ${className}`}
    >
      {children}
    </section>
  );
};
