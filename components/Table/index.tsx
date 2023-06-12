
import { Button } from "../Button";
import { mockDataAppointments } from "./mock";
import { TableComponent, TBody, TH, THead } from "./style";


export default function Table() {
  return (
    <TableComponent>
      <THead>
        <TH>ESPECIALIDADE</TH>
        <TH>PROFISSIONAL</TH>
        <TH>DATA</TH>
        <TH>HORA</TH>
        <TH></TH>
      </THead>
        {mockDataAppointments.map((item) => {
          return (
            <TBody key={item.id}>
              <td>{item.medico.especialidade.nome}</td>
              <td>{item.medico.nome}</td>
              <td>{item.dia}</td>
              <td>{item.horario}</td>
              <td><Button color="transparent">Desmarcar</Button></td>
            </TBody>
          )
        })}

    </TableComponent>
  )
}