export const HeadingTwo = ({
  text,
  color = "text-white",
  highlightColor = "text-secondary",
}) => {
  return (
    <h2
      className={`text-center text-3xl md:text-5xl font-bold leading-tight ${color}`}
    >
      {text.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{part}</span>
        ) : (
          <span
            key={index}
            className={`underline underline-offset-4 decoration-2 ${highlightColor}`}
          >
            {part.value}
          </span>
        )
      )}
    </h2>
  );
};
