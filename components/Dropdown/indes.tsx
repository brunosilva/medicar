import { Option, Select } from "./style";
import { IOption } from "./type";

// interface IOptions {
//   key: string;
//   text: string;
//   value: string;
// }

interface IProps {
  data: IOption[];
  placeholder: string;
  name: string;
  onChange: (id: string) => void;
}
export default function Dropdown<IProps>({data, placeholder, name, onChange}) {
  return (
    <Select name={name} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}>
      <Option>{placeholder}</Option>
      {data?.map((item) =>
        <Option key={item?.key} value={item?.value}>{item?.text}</Option>
        // <Option key={item.key} value={item.value}>{typeValue === 'nome' ? item.nome : typeValue === 'data' ? item.dia : item?.horarios?.map((hora, index) => `${hora}`)}</Option>
      )}
    </Select>
  )
}