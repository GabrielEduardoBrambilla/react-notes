import { createContext, useContext, useState, useEffect } from 'react'

export const AuthContext = createContext({})

import { api } from '../services/api'

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { token, user } = response.data

      localStorage.setItem("@reactnotes:user", JSON.stringify(user))
      localStorage.setItem("@reactnotes:token", token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ token, user })

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

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@reactnotes:user', JSON.stringify(user))

      setData({ user, token: data.token })


    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possivel atualizar o perfil")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@reactnotes:token")
    const user = localStorage.getItem("@reactnotes:user")

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token, user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, updateProfile, singOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
