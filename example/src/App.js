import React from 'react'

import Typer from 'react-animated-typer'

const App = () => {
  return (
    <Typer
      heading='Hey there, '
      dataText={[
        'Hello...',
        'Bonjour...',
        'Hola...',
        'Zdravstvuyte...',
        'Nǐn hǎo...',
        'Salve...',
        'Konnichiwa...',
        'Guten Tag...'
      ]}
    />
  )
}

export default App
