// package
import { useRouter } from "next/router";

// hooks
import useGetAppointments from "./hooks/useGetAppointments";

// component
import { Button } from "../../components/Button";
import Icon from "../../components/Icon";
import Logo from "../../components/Logo";
import Table from "../../components/Table";

// style
import { TitleSection } from "../../components/Title/style";
import { ContainerAppointments, Content, HeaderAppointments, LoginButtons, Row } from "./style";

export default function Appointments() {
  const route = useRouter();

  const {
    appointments
  } = useGetAppointments()

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
        <Table data={appointments} />
      </Content>
    </ContainerAppointments>
  )
}