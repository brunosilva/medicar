import { IDoctors, ISpecialties } from "../../pages/new/hooks/type";
import { Option, Select } from "./style";

// interface IOptions {
//   key: string;
//   text: string;
//   value: string;
// }

interface IProps {
  data: ISpecialties[] | IDoctors[];
  placeholder: string;
  name: string;
  onChange: (id: string) => void;
}
export default function Dropdown<IProps>({data, placeholder, name, onChange}) {

  return (
    <Select name={name} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}>
      <Option>{placeholder}</Option>
      {data?.map((item, index) =>
        <Option key={index} value={item.id}>{item.nome}</Option>
      )}
    </Select>
  )
}