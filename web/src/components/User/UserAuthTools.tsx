import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'
export const UserAuthTools = () => {
  const { loading, isAuthenticated, logIn, logOut, currentUser } = useAuth()

  if (loading) {
    return null
  }

  console.log(isAuthenticated ? currentUser : null)

const doAuth = async () => {

  if (isAuthenticated) {
    await logOut()
    navigate('/')
  } else {
    await logIn()
  }
  return null
}

  return (
    <button onClick={doAuth}>{isAuthenticated ? 'Log out' : 'Log in'}</button>
  )
}
