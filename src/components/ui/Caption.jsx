export const Caption = ({ caption }) => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <div className="w-3 h-8 rounded-md bg-caption" />
      <h4>{caption}</h4>
    </div>
  );
};
