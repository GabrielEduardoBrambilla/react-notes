import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>React Notes</h1>
        <p>Aplicação para salvar e gerenciar links uteis</p>

        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="*****"
          type="password"
          icon={FiLock}
        />
        <Button title="Entrar" />

        <a href="#">
          Criar Conta
        </a>
      </Form>
      <Background />
    </Container>
  )
}