export type Data = {
  status: string
  data:
    | string
    | {
        [key: string]: string | number | boolean | null | undefined
      }
}

const getData = async (
  url: string,
  callback?: () => void,
): Promise<Data | unknown> => {
  const data = await fetch(url)
  const json: unknown = await data.json()

  if (typeof json !== 'object' || json === null) {
    throw new Error('The data does not contain an object.')
  }

  !!callback && callback()

  return json
}

export { getData }
