// package
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";

// component
import { Button } from "../../components/Button";
import Dropdown from "../../components/Dropdown/indes";
import FormComponentStyle from "../../components/Form";
import Logo from "../../components/Logo";

// function
import { formatDate, formatDoctor, formatHour, formatSpecialties } from "./functions";
import { ICalendar, IDoctors } from "./hooks/type";

// hooks
import useGetCalendar from "./hooks/useGetCalendar";
import useGetDoctors from "./hooks/useGetDoctors";
import useGetSpecialties from "./hooks/useGetSpecialties";

// style
import { Field, FormAction } from "../../components/Form/style";
import { RowLogo } from "../style";
import { ContainerNew } from "./style";

export default function NewAppointment() {
  const route = useRouter();

  const [specialtiesSelected, setSpecialtiesSelected] = useState("")
  const [doctorSelected, setDoctorSelected] = useState("")
  const [dateSelected, setDateSelected] = useState("")

  const {
    specialties
  } = useGetSpecialties()

  const {
    doctors
  } = useGetDoctors()

  const {
    calendar
  } = useGetCalendar()

  const handleDoctor = (value: string) => {
    const doctorsBySpecialties = doctors?.filter((item: IDoctors) => item?.especialidade?.nome === value)
    return formatDoctor(doctorsBySpecialties)
  }

  const handleDate = useCallback((value: string) => {
    const dateByDoctor = calendar?.find((item: ICalendar) => item?.medico?.nome === value)
    return formatDate(dateByDoctor)
  }, [calendar]);

  const handleHour = useCallback((value: number) => {
    const hourByDate = calendar?.find((item: ICalendar) => item?.horarios?.filter((d) => d?.day === value))
      return formatHour(hourByDate)
  }, [calendar]);

  const handleSubmit = useCallback((value) => {
    console.log("submit values form", value)

    // if (value) route.push('/appointments')
  }, []);

  return (
    <ContainerNew>
      <RowLogo margin="large">
        <Logo />
      </RowLogo>
      <FormComponentStyle title="Nova consulta" >
          <Formik
            initialValues={{specialties: '', doctor: '', date: '', hour: ''}}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field>
                <Dropdown
                  name="specialties"
                  placeholder="Especialidade"
                  value={values.specialties}
                  data={formatSpecialties(specialties)}
                  onChange={(value: string) => setSpecialtiesSelected(value)}
                />
              </Field>
              <Field>
                <Dropdown
                  name="doctor"
                  placeholder="Médico"
                  value={values.doctor}
                  data={handleDoctor(specialtiesSelected)}
                  onChange={((value: string) => setDoctorSelected(value))}
                />
              </Field>
              <Field>
                <Dropdown
                  name="date"
                  placeholder="Data"
                  value={values.date}
                  data={handleDate(doctorSelected)}
                  onChange={((value) => setDateSelected(value))}
                />
              </Field>
              <Field>
                <Dropdown
                  name="hour"
                  placeholder="Hora"
                  value={values.hour}
                  data={ handleHour(dateSelected as unknown as number)}
                  onChange={((value) => console.log("Hora selecionada", value))}
                />
              </Field>
              <FormAction>
                <Button color="transparent" onClick={() => route.push('/appointments')}>Cancelar</Button>
                <Button color="green" type="submit">Confirmar</Button>
              </FormAction>
            </Form>
          )}
        </Formik>
      </FormComponentStyle>
    </ContainerNew>
  )
}