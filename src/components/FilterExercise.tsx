import SelectDropdown from "./SelectDropdown";
const movementPatterns = [
  "push",
  "pull",
  "legs",
  "core",
  "isometric",
  "explosive",
  "full-body",
];

const bodyRegions = ["Upper Body", "Lower Body", "Core", "Full Body", "Cardio"];

const exerciseLevel = ["beginner", "intermediate", "advanced"];
const FilterExercise = () => {
  return (
    <div>
      {" "}
      <div className='flex gap-2 mb-6 flex-wrap'>
        <SelectDropdown
          filterOptions={movementPatterns}
          filterName='movement-Patterns'
        />
        <SelectDropdown filterOptions={bodyRegions} filterName='body-Regions' />
        <SelectDropdown
          filterOptions={exerciseLevel}
          filterName='Exercise-Level'
        />

        {/* <div>
          Level:
          <select name='level' id=''>
            {exerciseLevel.map((level, index) => {
              return (
                <option key={index} value={level}>
                  {level}
                </option>
              );
            })}
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default FilterExercise;
