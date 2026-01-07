import { ChevronDown } from "lucide-react";

export const Accordeon = ({ item, onToggle, isOpen }) => {
  return (
    <div
      className={`
        rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-300
        ${isOpen ? "border-none" : "border-white/10 hover:border-secondary/40"}
      `}
    >
      <button
        type="button"
        onClick={onToggle}
        className={`
          flex w-full items-center justify-between gap-3 px-5 py-4 text-left
          ${isOpen ? "cursor-default" : "cursor-pointer"}
        `}
      >
        <span className="text-base font-medium text-white">
          {item.question}
        </span>

        <ChevronDown
          className={`h-5 w-5 text-secondary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-5 pb-4 text-sm text-white/70 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};
