import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const getData = async (url: string) => {
  const data = await fetch(url)
  const json = await data.json()

  console.log('Hello from server')

  return json
}

export default function Home({ data }: any) {
  console.log('Hello from client')

  return (
    <div>
      {/* {error && (
        <pre>
          <h1>error</h1>
        </pre>
      )}

      {loading ? (
        <pre>
          <h1>...</h1>
        </pre>
      ) : (
        <>
          <p>Return:</p> <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )} */}
      <>
        <h1>Server request (getServerSideProps)</h1>
        <p>Return:</p> <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  let data = null

  try {
    data = await getData('https://api.github.com/users/alekaimer')
  } catch (error: any) {
    console.log(error)
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}
