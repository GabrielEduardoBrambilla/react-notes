import { FiPlus, FiSearch } from 'react-icons/fi'

import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
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
      <Search>
        <Input placeholder="Pesquisar por tipo" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minhas notas" />
        <Note data={{ title: 'React', tags: [{ id: "1", name: "react" }, { id: "2", name: "go" }] }} />
      </Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
