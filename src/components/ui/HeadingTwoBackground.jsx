export const HeadingTwoBackground = ({ text }) => {
  return (
    <div className="w-full bg-linear-to-r from-black via-secondary to-black p-4 text-center">
      <h2 className="text-black text-lg md:text-2xl font-semibold">{text}</h2>
    </div>
  );
};
