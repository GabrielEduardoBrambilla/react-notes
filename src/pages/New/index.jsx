import { Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom";

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate();
  function handleAddLinks() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newLink])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))

  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite um título ")
    }
    if (newLink) {
      return alert("Você esqueceu de adicionar um link que digitou ")
    }
    if (newTag) {
      return alert("Você esqueceu de adicionar uma tag que digitou ")
    }
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })
    navigate(-1)
  }

  function handleBack() {
    navigate(-1)
  }

  return (

    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/"  >voltar</Link>
          </header>

          <Input
            placeholder="Titulo"
            onChange={e => setTitle(e.target.value)}
          />



          <Textarea placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
          <Section title="Links úteis">
            {
              links.map((link) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />

                ))
              }
              <NoteItem
                isNew
                placeholder="Nova Tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>

          </Section>

          <Button title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}