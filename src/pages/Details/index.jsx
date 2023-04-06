import { Container, Links } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'


export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">sadsadsad</a>
          </li>
          <li><a href="">okoko</a></li>
        </Links>
      </Section>
      <Section title="Marcadores">
        <Tag title='Express' />
        <Tag title='Node' />

      </Section>
      <Button title='Enviar' />
    </Container>

  )
}
