import { useCallback } from "react";
import { Button } from "../../components/Button";
import Dropdown from "../../components/Dropdown/indes";
import Form from "../../components/Form";
import { Field, FormAction } from "../../components/Form/style";
import useGetCalendar from "./hooks/useGetCalendar";
import useGetDoctors from "./hooks/useGetDoctors";
import useGetSpecialties from "./hooks/useGetSpecialties";

export default function NewAppointment() {
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
    <Form title="Nova consulta">
      <Field>
        <Dropdown name="especialidade" placeholder="Especialidade" data={specialties} onChange={handleDoctor} />
      </Field>
      <Field>
        <Dropdown name="medico" placeholder="Médico" data={doctors} onChange={((value) => handleDate(value))} />
      </Field>
      <Field>
        {/* <Dropdown name="data" placeholder="Data" /> */}
      </Field>
      <Field>
        {/* <Dropdown name="hora" placeholder="Hora" /> */}
      </Field>
      <FormAction>
        <Button>Cancelar</Button>
        <Button>Confirmar</Button>
      </FormAction>

    </Form>
  )
}