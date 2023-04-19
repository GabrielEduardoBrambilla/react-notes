import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'
export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState("")

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@reactnotes:user", JSON.stringify(user))
      localStorage.setItem("@reactnotes:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ user, token })

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possivel entrar")
      }
    }
  }

  function singOut() {
    localStorage.removeItem("@reactnotes:token")
    localStorage.removeItem("@reactnotes:user")

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem("@reactnotes:token")
    const user = localStorage.getItem("@reactnotes:user")

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token, user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.provider value={{ signIn, user: data.user, singOut }}>
      {children}
    </AuthContext.provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider }