import React from 'react'
import { render } from 'react-dom'

import { App } from './App'

declare global {
  interface Window {}
}

export async function bootstrap() {
  const rootEle = document.getElementById('root')

  const node = <App />

  render(node, rootEle)
}

bootstrap()
