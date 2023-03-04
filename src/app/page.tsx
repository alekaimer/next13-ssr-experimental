import React from 'react'
import Link from 'next/link'
import styles from '../app/page.module.css'

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

      <a
        href="https://beta.nextjs.org/docs/rendering/server-and-client-components"
        className={styles.link}
      >
        https://beta.nextjs.org/docs/rendering/server-and-client-components
      </a>
    </main>
  )
}
