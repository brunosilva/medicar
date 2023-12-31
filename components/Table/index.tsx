
// package
import moment from "moment";

// hooks
import { IAppomtments } from "../../pages/appointments/hooks/type";

// components
import { Button } from "../Button";
import Icon from "../Icon";

// style
import { TableComponent, TH, TR } from "./style";

interface IProps {
  data: IAppomtments[]
}
export default function Table<IProps>({data}) {
  return (
    <TableComponent>
      <thead>
        <TR>
          <TH>ESPECIALIDADE</TH>
          <TH>PROFISSIONAL</TH>
          <TH>DATA</TH>
          <TH>HORA</TH>
          <TH></TH>
        </TR>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <TR key={item.id}>
              <td>{item?.medico?.especialidade.nome}</td>
              <td>{item?.medico?.nome}</td>
              <td>{moment(item?.dia).format("DD/MM/YYYY")}</td>
              <td>{item?.horario}</td>
              <td><Button color="transparent"><Icon model="close" /> Desmarcar</Button></td>
            </TR>
          )
        })}
      </tbody>
    </TableComponent>
  )
}