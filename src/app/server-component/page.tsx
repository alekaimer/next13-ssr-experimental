async function getData() {
  const data = await fetch('https://api.github.com/users/alekaimer/repos')
  const json = await data.json()

  console.log('Hello from server')

  return json
}

export default async function ServerComponent() {
  const data = await getData()

  return (
    <main>
      <h1>Server component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
