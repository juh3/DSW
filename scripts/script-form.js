import http from 'k6/http'

export let options = {
  summaryTrendStats: ['avg', 'med', 'p(99)', 'p(95)'],
  vus: 5,
  duration: '10s',
}
export default function () {
  let res = http.get('http://localhost:7777')
  res = res.submitForm({
    formSelector: 'form',
    fields: {
      url: 'https://github.com/juh3?tab=repositories',
    },
  })
}
