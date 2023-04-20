import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from './style'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom";




export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(user.avatar)
  const [avatarFile, setAvatarFile] = useState(null)
  const navigate = useNavigate()

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }
  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }
  function handleBack() {
    navigate(-1)
  }

  return <Container>
    <header>
      <Link to="/home" onClick={handleBack}>
        <FiArrowLeft />
      </Link>
    </header>

    <Form>
      <Avatar>
        <img src={avatar} alt="foto de usuario" />
        <label htmlFor="avatar">
          <FiCamera />
          <input id="avatar" type="file" onChange={handleChangeAvatar} />
        </label>
      </Avatar>
      <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
        value={name}
        onChange={e => setNome(e.target.value)}
      />
      <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordOld(e.target.value)}
      />
      <Input
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
        onChange={e => setPasswordNew(e.target.value)}
      />
      <Button title="Salvar" onClick={handleUpdate} />
    </Form>
  </Container>
}