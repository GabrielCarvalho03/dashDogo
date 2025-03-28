import { HTMLAttributes } from "react";

type FilterProps = HTMLAttributes<HTMLSelectElement> & {
  title: string;
  options: string[];
  defaultValue: string;
};

export const Filter = ({
  title,
  options,
  defaultValue,
  ...props
}: FilterProps) => {
  return (
    <main className="min-w-40 min-h-12 px-4 py-2 border-[0.5px] border-bg-gray-ligth rounded-lg flex items-center ">
      <h1 className="text-white text-sm">{title}:</h1>

      <select
        {...props}
        defaultValue={defaultValue}
        className="ml-2 bg-primary  text-white text-sm outline-none flex items-center "
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </main>
  );
};
