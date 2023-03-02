import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <pre>
        <Link href="/client">Client component</Link> |{' '}
        <Link href="/server">Server component</Link>
      </pre>
    </main>
  )
}
