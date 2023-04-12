import { Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItem value="https://google.com" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova Tag" />
            </div>

          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}