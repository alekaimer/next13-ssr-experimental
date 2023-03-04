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
      <p>
        O uso do hook use pode causar problemas de renderizações do lado do
        cliente.
        <a href="https://beta.nextjs.org/docs/data-fetching/fetching#use-in-client-components">
          https://beta.nextjs.org/docs/data-fetching/fetching#use-in-client-components
        </a>
      </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
