import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { IDoctors } from "./type";

const useGetDoctors = () => {
  const [doctors, setDoctors] = useState([{}])

  useEffect(() => {
    api.get<IDoctors[]>(`/doctors`).then(response => {
        setDoctors(response.data);
    });
  }, []);

  // const getDoctorBySpecialties = useCallback(
  //   async (id: string) => {
  //     const response = api.get<IDoctors[]>(`/doctors`).then(response => {
  //     });

  //     console.log("especialties", response)
  //     // const formatResponse = response?.data?.reduce((acc, obj) => obj.specialidade.id === id)
  //     // setCalendar(response);
  //     return
  //   },
  //   []
  // )


  return {
    doctors: doctors,
  }
}

export default useGetDoctors
