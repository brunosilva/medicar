import { useRouter } from "next/router";
import { useCallback } from "react";
import { Button } from "../../components/Button";
import Dropdown from "../../components/Dropdown/indes";
import Form from "../../components/Form";
import { Field, FormAction } from "../../components/Form/style";
import Logo from "../../components/Logo";
import { RowLogo } from "../style";
import useGetCalendar from "./hooks/useGetCalendar";
import useGetDoctors from "./hooks/useGetDoctors";
import useGetSpecialties from "./hooks/useGetSpecialties";
import { ContainerNew } from "./style";

export default function NewAppointment() {
  const route = useRouter();

  const {
    specialties
  } = useGetSpecialties()

  const {
    doctors
  } = useGetDoctors()

  const {
    getCalendarByDoctor,
    calendar
  } = useGetCalendar()

  const handleDoctor = useCallback((id) => {
    console.log('handleDoctor', id)
  }, [])

  const handleDate = useCallback((id) => {
    console.log('handleDate', id)
  }, [])

  return (
    <ContainerNew>
      <RowLogo margin="large">
        <Logo />
      </RowLogo>
      <Form title="Nova consulta">
        <Field>
          <Dropdown name="especialidade" placeholder="Especialidade" data={specialties} onChange={handleDoctor} typeValue="nome" />
        </Field>
        <Field>
          <Dropdown name="medico" placeholder="Médico" data={doctors} onChange={((value) => handleDate(value))} typeValue="nome" />
        </Field>
        <Field>
          <Dropdown name="data" placeholder="Data" data={calendar} onChange={((value) => handleDate(value))} typeValue="data" />
        </Field>
        <Field>
          <Dropdown name="hora" placeholder="Hora" data={calendar} onChange={((value) => handleDate(value))} typeValue="hora"  />
        </Field>
        <FormAction>
          <Button color="transparent" onClick={() => route.push('/appointments')}>Cancelar</Button>
          <Button color="green" onClick={() => route.push('/appointments')}>Confirmar</Button>
        </FormAction>
      </Form>
    </ContainerNew>
  )
}