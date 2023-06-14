import { useRouter } from "next/router";
import { Button } from "../../components/Button";
import Icon from "../../components/Icon";
import Logo from "../../components/Logo";
import Table from "../../components/Table";
import { TitleSection } from "../../components/Title/style";
import { ContainerAppointments, Content, HeaderAppointments, LoginButtons, Row } from "./type";

export default function Appointments() {
  const route = useRouter();

  return (
    <ContainerAppointments>
      <HeaderAppointments>
        <Logo />
        <LoginButtons>
          <span>Bruno Silva</span>
          <Button color="transparent" onClick={() => route.push('/login')}>Desconectar</Button>
        </LoginButtons>
      </HeaderAppointments>
      <Content>
        <Row>
          <TitleSection><span>Consulta Clínica</span></TitleSection>
          <Button color="green" onClick={() => route.push('/new')}><Icon model="plus" />Nova Consulta</Button>
        </Row>
        <Table />
      </Content>
    </ContainerAppointments>
  )
}