import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'

const container = document.getElementById('root')

if (!container) {
  throw Error('DOM root element not found')
}

const root = createRoot(container)

const globalStyles = css({
  '.page__body': {
    margin: 0,
  },
})

const Container = styled.div({
  minHeight: '100vh',
  margin: 0,
  display: 'grid',
  justifyContent: 'center',
  alignContent: 'center',
})

root.render(
  <StrictMode>
    <Global styles={globalStyles} />
    <Container>
      <App />
    </Container>
  </StrictMode>
)
