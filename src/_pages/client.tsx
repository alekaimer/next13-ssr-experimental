import { Inter } from 'next/font/google'
import { useCallback, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const getData = async (url: string) => {
  const data = await fetch(url)
  const json = await data.json()

  console.log('Hello from client')

  return json
}

export default function Home() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      const data = await getData('https://api.github.com/users/alekaimer/repos')
      setUser(data)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

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

      {error && (
        <pre>
          <h1>{error}</h1>
        </pre>
      )}
    </div>
  )
}
