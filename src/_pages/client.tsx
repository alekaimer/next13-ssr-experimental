import { Inter } from 'next/font/google'
import { useCallback, useEffect, useState } from 'react'
import { getData } from '@/utils/getData'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useState<{} | unknown>({})
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const data = await getData(
        'https://api.github.com/users/alekaimer/repos',
        () => console.log('Hello from client'),
      )
      setUser(data)
    } catch (error) {
      setError(error as string)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (error) {
    return (
      <pre>
        <h1>Error</h1>
        <pre>{error}</pre>
      </pre>
    )
  }

  return (
    <div>
      {loading ? (
        <pre>
          <h1>...</h1>
        </pre>
      ) : (
        <>
          <h1>Client request</h1>
          <p>Return:</p> <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </div>
  )
}
