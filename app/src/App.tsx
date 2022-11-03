import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import styled from '@emotion/styled'

const Button = styled.button({
  borderRadius: 8,
  border: '1px solid transparent',
  padding: '0.6em 1.2em',
  fontSize: '1em',
  fontWeight: 500,
  fontFamily: 'inherit',
  backgroundColor: '#f9f9f9',
  cursor: 'pointer',
  transition: 'border-color 0.25s',
})

const Title = styled.h1({
  fontSize: 60,
  color: '#906dfe',
})

const ViteLogo = styled.img({
  height: 220,
  willChange: 'filter',
  ':hover': {
    filter: 'drop-shadow(0 0 2em #646cffaa)',
  },
})

type Props = {
  className?: string
}

function UnstyledApp({ className }: Props) {
  const [count, setCount] = useState(0)

  return (
    <div className={className}>
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <ViteLogo src={viteLogo} alt="React logo" />
        </a>
      </div>
      <Title>Vite + React + TS + Prettier + ESLint</Title>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  )
}

export const App = styled(UnstyledApp)({
  display: 'grid',
  justifyItems: 'center',
  alignContent: 'center',
  padding: 30,
})
