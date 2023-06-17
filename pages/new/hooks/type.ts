export interface ISpecialties {
  id: string;
  nome: string;
}

export interface IDoctors {
  id: string,
  crm: number,
  nome: string,
  especialidade: {
    id: string,
    nome: string
  }
}

export interface IHours {
  id: number,
  value: string
}

export interface ICalendar {
  id: string,
  medico: {
    id: string,
    crm: number,
    nome: string,
    especialidade: {
        id: string,
        nome: string
    }
  },
  dia: {id: number, day: number, value: string},
  horarios: IHours[]
}

