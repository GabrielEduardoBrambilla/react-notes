import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title='Excluir nota' />


          <h1>
            Introdução a react
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est amet, facilis libero quas eaque maiores architecto cum culpa placeat qui odit omnis officiis molestiae quae quibusdam iure, enim nam.
            Blanditiis quidem architecto, perferendis numquam nobis distinctio eligendi illum maxime neque vel velit voluptates id ut ipsa cum excepturi iure harum quibusdam. Itaque, qui culpa non fugit enim ullam quam.
            Nisi placeat ratione minus id nihil consequatur architecto. Excepturi ipsam natus obcaecati quaerat non placeat, unde odit atque rerum fugit accusamus autem fuga tempora dignissimos ex aperiam, voluptatem nisi quis.
          </p>
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
        </Content>
      </main>
    </Container>

  )
}
