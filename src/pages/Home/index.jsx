import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

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
      <Search></Search>
      <Content></Content>
      <NewNote></NewNote>
    </Container>
  )
}
