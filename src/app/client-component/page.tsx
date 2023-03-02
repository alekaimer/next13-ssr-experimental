'use client'
import { use } from 'react'

async function getData() {
  const data = await fetch('https://api.github.com/users/alekaimer/repos')
  const json = await data.json()

  console.log('Hello from client')

  return json
}

export default function ClientComponent() {
  const data = use(getData())

  return (
    <main>
      <h1>Client component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
