import { useCallback, useEffect, useState } from "react";
import {
  bodyRegion,
  Exercise,
  ExerciseLevel,
  MovementPatternType,
} from "../lib/types";

import SelectDropdown from "./SelectDropdown";
import { exercises } from "../lib/exercises";

const movementPatterns: MovementPatternType[] = [
  "push",
  "pull",
  "legs",
  "core",
  "isometric",
  "explosive",
  "full-body",
];

const exerciseLevel: ExerciseLevel[] = ["beginner", "intermediate", "advanced"];

const bodyRegions: bodyRegion[] = [
  "core",
  "upper-body",
  "lower-body",
  "full-body",
];

type ApplyFilterProp = {
  movementPattern: string;
  bodyRegion: string;
  level: string;
};
interface FilterExerciseProps {
  setFilteredExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}
const FilterExercise = ({ setFilteredExercises }: FilterExerciseProps) => {
  //   const [movementPattern, setMovementPatern] = useState("");
  //   const [bodyRegion, setBodyRegion] = useState("");
  //   const [level, setLevel] = useState("");

  const [filter, setFilter] = useState({
    movementPattern: "",
    bodyRegion: "",
    level: "",
  });

  //   const filterExercise = useCallback(
  //     (filter: ApplyFilterProp) => {
  //       if (
  //         filter.movementPattern === "" &&
  //         filter.bodyRegion === "" &&
  //         filter.level === ""
  //       ) {
  //         setFilteredExercises(exercises);
  //         return exercises;
  //       }
  //       const results = exercises.filter(
  //         (exercise) =>
  //           exercise.movementPattern.includes(filter.movementPattern) &&
  //           exercise.level.includes(filter.level) &&
  //           exercise.bodyRegion.includes(filter.bodyRegion),
  //       );
  //       if (results) {
  //         setFilteredExercises(results);
  //         console.log(results);
  //       }

  //       return results;
  //     },
  //     [setFilteredExercises],
  //   );

  const filterExercise = useCallback(
    (filter: ApplyFilterProp) => {
      const results = exercises.filter((exercise) => {
        const matchesPattern =
          !filter.movementPattern ||
          exercise.movementPattern === filter.movementPattern;

        const matchesLevel = !filter.level || exercise.level === filter.level;

        const matchesRegion =
          !filter.bodyRegion || exercise.bodyRegion === filter.bodyRegion;

        return matchesPattern && matchesLevel && matchesRegion;
      });

      setFilteredExercises(results);
      return results;
    },
    [setFilteredExercises],
  );

  useEffect(() => {
    if (filter) {
      filterExercise(filter);
      //   console.log(filter);
    }
  }, [filterExercise, filter]);

  return (
    <div>
      {" "}
      <div className='flex gap-2 mb-6 flex-wrap'>
        <SelectDropdown
          filterOptions={movementPatterns}
          filterName='movementPattern'
          setChoice={setFilter}
        />
        <SelectDropdown
          filterOptions={bodyRegions}
          filterName='bodyRegion'
          setChoice={setFilter}
        />
        <SelectDropdown
          filterOptions={exerciseLevel}
          filterName='level'
          setChoice={setFilter}
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
