import { getData } from '@/utils/getData'

export default async function ServerComponent() {
  async function fetch() {
    try {
      const data = await getData(
        'https://api.github.com/users/alekaimer/repos',
        () => console.log('Hello from server'),
      )
      return {
        status: 'success',
        data,
      }
    } catch (error) {
      return {
        status: 'error',
        error,
      }
    }
  }

  const data = await fetch()

  if (data.status === 'error')
    return (
      <main>
        <h1>Error</h1>
        <>{data.error}</>
      </main>
    )

  return (
    <main>
      <h1>Server component</h1>
      {data.status === 'success' && (
        <pre>{JSON.stringify(data.data, null, 2)}</pre>
      )}
    </main>
  )
}
