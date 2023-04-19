import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiLogIn, FiMail, FiUser } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSingUp() {
    if (!name || !email || !password) {
      alert("Please enter name email and password ")
    }

    api.post("/users", { name, email, password }).then(() => {
      alert("Usuario cadastrado com sucesso")
      navigated("/")
    }).catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Nao foi possivel cadastrar")
      }
    })

  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>React Notes</h1>
        <p>Aplicação para salvar e gerenciar links uteis</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="*****"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSingUp} />

        <Link to="/">
          Voltar para o login
        </Link>
      </Form>
    </Container>
  )
}