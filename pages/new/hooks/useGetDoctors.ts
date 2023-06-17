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

  return {
    doctors: doctors,
  }
}

export default useGetDoctors
