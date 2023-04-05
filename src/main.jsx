import { ThemeProvider } from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import { Details } from './pages/Details'
import { Button } from './components/Button'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Details />
      <Button title="Entrar" />
      <Button title="Entrar" loading />
    </ThemeProvider>
  </React.StrictMode>
)
