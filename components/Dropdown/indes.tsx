import { Option, Select } from "./style";
import { IOption } from "./type";

interface IProps {
  data: IOption[];
  placeholder: string;
  name: string;
  value: string;
  onChange: (id: string) => void;
}
export default function Dropdown<IProps>({data, placeholder, value, name, onChange}) {
  return (
    <Select name={name} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}>
      <Option colors={"placeholder"}>{placeholder}</Option>
      {data?.map((item) =>
        <Option colors={"data"} key={item?.key} value={item?.value}>{item?.text}</Option>
      )}
    </Select>
  )
}