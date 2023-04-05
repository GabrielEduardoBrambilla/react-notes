import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/GabrielEduardoBrambilla.png" alt="Img perfil usuario" />
        <div>
          <span>Bem-vindo</span>
          <strong>Gabriel Eduardo Brambilla</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}