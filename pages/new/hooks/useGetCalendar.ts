import { useCallback, useEffect, useState } from "react";
import { api } from "../../../services/api";
import { ICalendar } from "./type";

const useGetCalendar = () => {
  const [calendar, setCalendar] = useState([{}])

  useEffect(() => {
    api.get<ICalendar[]>(`/calendar`).then(response => {
        setCalendar(response.data);
    });
  }, []);

  const getCalendarByDoctor = useCallback(
    async (id: string) => {
      const response = api.get<ICalendar[]>(`/calendar`).then(response => {
      });

      // setCalendar(response);
      return
    },
    []
  )

  return {
    getCalendarByDoctor: async(id: string) => [{}],
    calendar: calendar,
  }
}

export default useGetCalendar
