import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { IAppomtments } from "./type";

const useGetAppointments = () => {
  const [appointments, setAppointments] = useState([{}])

  useEffect(() => {
    api.get<IAppomtments[]>(`/appointments`).then(response => {
        setAppointments(response.data);
    });
  }, []);

  return {
    appointments: appointments,
  }
}

export default useGetAppointments
