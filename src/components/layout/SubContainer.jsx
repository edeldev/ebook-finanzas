export const SubContainer = ({ children, className }) => {
  return (
    <section className={`w-full max-w-2xl mx-auto flex flex-col ${className}`}>
      {children}
    </section>
  );
};
