type FilterProp = {
  movementPattern: string;
  bodyRegion: string;
  level: string;
};
type SelectDropdownProps = {
  filterOptions: string[];
  filterName: string;
  label: string;
  setChoice: React.Dispatch<React.SetStateAction<FilterProp>>;
};

const SelectDropdown = ({
  filterOptions,
  filterName,
  setChoice,
  label,
}: SelectDropdownProps) => {
  return (
    <div className='border rounded px-2 py-1 text-xs md:text-base text-zinc-400'>
      {label}:
      <select
        className='focus:ring-1 focus:ring-white bg-zinc-800 rounded text-white ml-1'
        name={filterName}
        id=''
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const newValue = e.target.value;
          setChoice((prev) => ({ ...prev, [filterName]: newValue }));
        }}
      >
        <option value=''>Select...</option>
        {filterOptions.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectDropdown;
