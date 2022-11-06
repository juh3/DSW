import * as mainService from '../../services/mainService.js'

const renderMain = ({ render }) => {
  render('main.eta')
}

const postFormData = async ({ response, request, render }) => {
  const body = request.body()
  const params = await body.value
  const url = params.get('url')
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

  await mainService.setUrl(url, string)
  const data = {
    url: url,
    string: string,
  }
  render('main.eta', data)
}

const redirectTo = async ({ params, response }) => {
  const string = params.string
  const url = await mainService.getUrl(string)
  return response.redirect(url)
}

export { renderMain, postFormData, redirectTo }
