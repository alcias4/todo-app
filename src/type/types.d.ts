
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


export type Data  = Task[]