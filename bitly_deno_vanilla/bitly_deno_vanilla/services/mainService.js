import { executeQuery } from '../database/database.js'

const postFormData = async (url) => {
  let length = 6
  let string = ''
  let i = 0
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  for (i; i < length; i++) {
    let index = Math.floor(Math.random() * 26)
    let whatCase = Math.floor(Math.random() * 2)

    if (whatCase === 0) {
      string = string + abc[index]
    } else {
      string = string + abc[index].toUpperCase()
    }
  }
  await executeQuery(
    'INSERT INTO shortenings (url, string) VALUES ($url, $string)',
    { url: url, string: string }
  )
  const data = {
    url: url,
    string: string,
  }
  return data
}
const getUrl = async (string) => {
  console.log('getting url', string)
  const response = await executeQuery(
    'SELECT (url) FROM shortenings WHERE string = $string',
    { string: string }
  )
  return response.rows[0].url
}
export { postFormData, getUrl }
