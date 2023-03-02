import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <pre>
        <Link href="/client-component" prefetch={false}>
          Client component
        </Link>{' '}
        |{' '}
        <Link href="/server-component" prefetch={false}>
          Server component
        </Link>
      </pre>
    </main>
  )
}
