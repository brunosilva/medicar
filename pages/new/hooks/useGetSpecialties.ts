import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { ISpecialties } from "./type";

const useGetSpecialties = () => {
  const [specialties, setSpecialties] = useState([{}])

  useEffect(() => {
    api.get<ISpecialties[]>(`/specialties`).then(response => {
        setSpecialties(response.data);
    });
  }, []);

  return {
    specialties: specialties,
  }
}

export default useGetSpecialties
