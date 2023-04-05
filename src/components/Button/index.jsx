import { Container } from './style'

export function Button(props) {
  return (
    <Container type="button" disabled={props.loading}>
      {props.title}
    </Container>

  )
}