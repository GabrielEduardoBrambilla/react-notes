import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>React Notes</h1>
      </Brand>
      <Header></Header>
      <Menu>
        <li>
          <ButtonText title="Todos"></ButtonText>
        </li>
        <li>
          <ButtonText title="React"></ButtonText>
        </li>
        <li>
          <ButtonText title="NodeJS"></ButtonText>
        </li>
      </Menu>
      <Search>
        <Input placeholder="Pequisar por tipo" />
      </Search>
      <Content></Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
