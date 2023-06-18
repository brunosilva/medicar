import moment from "moment"

export const formatSpecialties = (data) => {
  return (
    data?.map((item) => ({
      text: item.nome,
      value: item.nome,
      key: item.id
    }))
  )
}

export const formatDoctor = (data) => {
  return (
    data?.map((item) => ({
      text: item.nome,
      value: item.nome,
      key: item.id
    }))
  )
}

export const formatDate = (data) => {
  return (
    data?.dia?.map((item) => ({
      text: moment(item?.value).format("dddd, MMMM Do YYYY"),
      value: item?.id,
      key: item?.id
    }))
  )
}

export const formatHour = (data) => {
  return (
    data?.horarios?.map((item) => ({
      text: item?.value,
      value: item?.value,
      key: item?.id
    }))
  )
}
