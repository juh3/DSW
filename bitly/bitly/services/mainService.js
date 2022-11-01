import { executeQuery } from '../database/database.js'

const setUrl = async (url, string) => {
  await executeQuery(
    'INSERT INTO shortenings (url, string) VALUES ($url, $string)',
    { url: url, string: string }
  )
}

const getUrl = async (string) => {
  console.log('getting url', string)
  const response = await executeQuery(
    'SELECT (url) FROM shortenings WHERE string = $string',
    { string: string }
  )
  return response.rows[0].url
}

export { setUrl, getUrl }
