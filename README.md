# react-animated-typer

> A animated component to visualize the typing text in a react view component.

[![NPM](https://img.shields.io/npm/v/react-animated-typer.svg)](https://www.npmjs.com/package/react-animated-typer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-animated-typer
```

## Usage

```jsx
import React, { Component } from 'react'

import Typer from 'react-animated-typer'

class Example extends Component {
  render() {
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
}
```

## Sample Output

![](https://github.com/shehand/react-animated-typer/blob/main/docs/react-animated-typer.gif)

## License

(Apache License, Version 2.0) © [shehand](https://github.com/shehand)
