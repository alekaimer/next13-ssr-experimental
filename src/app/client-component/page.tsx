'use client'
import { use } from 'react'
import { getData } from '@/utils/getData'

export default function ClientComponent() {
  const data = use(
    getData('https://api.github.com/users/alekaimer/repos', () =>
      console.log('Hello from client'),
    ),
  )

  return (
    <main>
      <h1>Client component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
