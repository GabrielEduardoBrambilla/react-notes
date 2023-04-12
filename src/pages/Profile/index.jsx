import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from './style'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function Profile() {
  return <Container>
    <header>
      <a href="/">
        <FiArrowLeft />
      </a>
    </header>

    <Form>
      <Avatar>
        <img src="https://github.com/GabrielEduardoBrambilla.png" alt="foto de usuario" />
        <label htmlFor="avatar">
          <FiCamera />
          <input type="text" id="avatar" type="file" />
        </label>
      </Avatar>
      <Input
        placeholder="Nome"
        type="text"
        icon={FiUser}
      />
      <Input
        placeholder="E-mail"
        type="text"
        icon={FiMail}
      />
      <Input
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
      />
      <Input
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
      />
      <Button title="Salvar" />
    </Form>
  </Container>
}