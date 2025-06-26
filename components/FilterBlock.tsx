// src/components/FilterBlock.tsx

interface FilterBlockProps {
  title: string;
  options: string[];
  selectedValue: string; // New prop for the currently selected value
  onValueChange: (value: string) => void; // New prop for the change handler
}

export default function FilterBlock({ title, options, selectedValue, onValueChange }: FilterBlockProps) {
  return (
    <div className="mb-4">
      <label htmlFor={title.toLowerCase()} className="block text-gray-700 text-sm font-bold mb-2">
        {title}:
      </label>
      <select
        id={title.toLowerCase()}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={selectedValue} // Control the select input with state
        onChange={(e) => onValueChange(e.target.value)} // Update state on change
      >
        <option value="">All {title}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}