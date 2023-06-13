import { Button } from "../../components/Button";
import Icon from "../../components/Icon";
import Table from "../../components/Table";
import { TitleSection } from "../../components/Title/style";
import { ContainerAppointments, Row } from "./type";

export default function Appointments() {
  return (
    <ContainerAppointments>
      <Row>
        <TitleSection><span>Consulta Clínica</span></TitleSection>
        <Button color="green"><Icon model="plus" />Acessar</Button>
      </Row>
      <Table />
    </ContainerAppointments>
  )
}