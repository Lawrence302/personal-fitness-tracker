type SelectDropdownProps = {
  filterOptions: string[];
  filterName: string;
};

const SelectDropdown = ({ filterOptions, filterName }: SelectDropdownProps) => {
  return (
    <div className='border rounded px-2 py-1 text-xs md:text-base text-zinc-400'>
      {`${filterName.split("-").join(" ").charAt(0).toUpperCase() + filterName.split("-")[0].slice(1)} ${filterName.split("-")[1]}`}
      :
      <select
        className='focus:ring-1 focus:ring-white bg-zinc-800 rounded text-white ml-1'
        name={filterName}
        id=''
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
