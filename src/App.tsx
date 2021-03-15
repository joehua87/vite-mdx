import React from 'react'

import Example from '~/example.mdx'

export function App() {
  return (
    <div>
      <nav className="p-4 border-b">Navigation here</nav>
      <div className="p-4">
        <Example />
      </div>
    </div>
  )
}
