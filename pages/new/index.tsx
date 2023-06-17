import moment from "moment";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "../../components/Button";
import Dropdown from "../../components/Dropdown/indes";
import Form from "../../components/Form";
import { Field, FormAction } from "../../components/Form/style";
import Logo from "../../components/Logo";
import { RowLogo } from "../style";
import { ICalendar, IDoctors } from "./hooks/type";
import useGetCalendar from "./hooks/useGetCalendar";
import useGetDoctors from "./hooks/useGetDoctors";
import useGetSpecialties from "./hooks/useGetSpecialties";
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
    getCalendarByDoctor,
    calendar
  } = useGetCalendar()

  const formatSpecialties = (data) => {
    return (
      data?.map((item) => ({
        text: item.nome,
        value: item.nome,
        key: item.id
      }))
    )
  }

  const formatDoctor = (data) => {
    return (
      data?.map((item) => ({
        text: item.nome,
        value: item.nome,
        key: item.id
      }))
    )
  }

  const formatDate = (data) => {
    return (
      data?.dia?.map((item) => ({
        text: moment(item?.value).format("dddd, MMMM Do YYYY"),
        value: item?.id,
        key: item?.id
      }))
    )
  }

  // const formatHours = (data) => {
  //   // console.log("formatCalendar", data)

  //     // return (
  //       //   data?.map((item) => )
  //       // )
  // }

  const handleDoctor = (value) => {
    const doctorsBySpecialties = doctors?.filter((item: IDoctors) => item?.especialidade?.nome === value)
    return formatDoctor(doctorsBySpecialties)
  }

  const handleDate = (value) => {
    const dateByDoctor = calendar?.find((item: ICalendar) => item?.medico?.nome === value)
    return formatDate(dateByDoctor)
  }

  const handleHour = (value) => {
    console.log("dateSelected", dateSelected);
    console.log("handleHour", value);
    // const hourByDate = calendar?.find((item: ICalendar) => item?.medico?.nome === value)
    // return formatDate(dateByDoctor)
  }

  // const handleHours = (data) => {
  //   console.log("handleCalendar", data)
  //   return (
  //     data?.horarios?.map((item, index) => ({
  //       text: item,
  //       value: index,
  //       key: index
  //     }))
  //   )
  // }


  return (
    <ContainerNew>
      <RowLogo margin="large">
        <Logo />
      </RowLogo>
      <Form title="Nova consulta">
        <Field>
          <Dropdown
            name="especialidade"
            placeholder="Especialidade"
            data={formatSpecialties(specialties)}
            onChange={(value: string) => setSpecialtiesSelected(value)}
          />
        </Field>
        <Field>
          <Dropdown
            name="medico"
            placeholder="Médico"
            data={handleDoctor(specialtiesSelected)}
            onChange={((value: string) => setDoctorSelected(value))}
          />
        </Field>
        <Field>
          <Dropdown
            name="data"
            placeholder="Data"
            data={handleDate(doctorSelected)}
            onChange={((value) => setDateSelected(value))}
          />
        </Field>
        <Field>
          <Dropdown
            name="hora"
            placeholder="Hora"
            data={handleHour(dateSelected)}
            onChange={((value) => handleDate(value))}
          />
        </Field>
        <FormAction>
          <Button color="transparent" onClick={() => route.push('/appointments')}>Cancelar</Button>
          <Button color="green" onClick={() => route.push('/appointments')}>Confirmar</Button>
        </FormAction>
      </Form>
    </ContainerNew>
  )
}