import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function Header() {
  const { singOut } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files${user.avatar}` : avatarPlaceholder
  const navigation = useNavigate()

  function handleSingOut() {
    navigation("/")
    singOut()
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSingOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}