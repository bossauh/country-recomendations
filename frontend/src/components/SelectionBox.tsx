import { FC } from "react";
import countries from "../common/countries";
import Selection from "./Selection";

const SelectionBox: FC<{
  onCountryChange: (value: string) => void;
  onSeasonChange: (value: string) => void;
}> = (props) => {
  return (
    <div className="flex items-start gap-unit-sm flex-col child:w-full child:md:w-auto child:md:flex-1">
      <Selection
        title="Country"
        description="Select a country to get recommendations from"
        items={countries}
        onChange={(value) => {
          props.onCountryChange(value);
        }}
      />
      <Selection
        title="Season"
        description="Select a season to get recommendations from"
        items={["spring", "summer", "fall", "winter"]}
        onChange={(value) => {
          props.onSeasonChange(value);
        }}
      />
    </div>
  );
};

export default SelectionBox;
