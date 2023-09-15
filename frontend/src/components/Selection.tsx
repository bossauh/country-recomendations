import { Card, CardHeader, Select, SelectItem } from "@nextui-org/react";
import { FC } from "react";

const Selection: FC<{
  title: string;
  description: string;
  items: string[];
  onChange: (value: string) => void;
}> = (props) => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-start">
        <h3 className="text-lg font-bold">{props.title}</h3>
        <p className="text-sm">{props.description}</p>
      </CardHeader>

      <Select
        label={props.title}
        size="sm"
        onChange={(v) => {
          props.onChange(v.target.value);
        }}
        className="capitalize"
      >
        {props.items.map((item) => {
          return (
            <SelectItem className="capitalize" key={item} value={item}>
              {item}
            </SelectItem>
          );
        })}
      </Select>
    </Card>
  );
};

export default Selection;
