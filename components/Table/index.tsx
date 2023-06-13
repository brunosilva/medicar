
import { Button } from "../Button";
import Icon from "../Icon";
import { mockDataAppointments } from "./mock";
import { TableComponent, TH, TR } from "./style";


export default function Table() {
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
        {mockDataAppointments.map((item) => {
          return (
            <TR key={item.id}>
              <td>{item.medico.especialidade.nome}</td>
              <td>{item.medico.nome}</td>
              <td>{item.dia}</td>
              <td>{item.horario}</td>
              <td><Button color="transparent"><Icon model="close" /> Desmarcar</Button></td>
            </TR>
          )
        })}
      </tbody>
    </TableComponent>
  )
}