
export interface User {
  id: number
  name: string
  email: string
}

export interface Task {
  id: number
  text: string
  status:boolean

}

export interface TaskCom { 
  id: number
  text: string
  status: boolean
  notaId: number
}

export type Data  = Task[]