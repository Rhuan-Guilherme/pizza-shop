import { api } from '@/lib/axios'

export interface SingInBody {
  email: string
}

export async function singIn({ email }: SingInBody) {
  await api.post('/authenticate', { email })
}
