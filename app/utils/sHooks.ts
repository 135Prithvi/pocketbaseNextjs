import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export const useUser = () => {
  const nextCookies = cookies()
  const pb_auth = nextCookies.get('pb_auth')
  let user = null
  if (pb_auth) {
    user = JSON.parse(pb_auth.value)
    return user
  } else {
    return null
  }
}

export const useUserProtected = () => {
  const nextCookies = cookies()
  const pb_auth = nextCookies.get('pb_auth')
  let user = null
  if (!pb_auth) {
    redirect('/auth/login')
  } else {
    user = JSON.parse(pb_auth.value)
  }
  return user
}

export const checkLoggedIn = () => {
  const nextCookies = cookies()
  const pb_auth = nextCookies.get('pb_auth')
  if (pb_auth) {
    redirect('/')
  }
}

