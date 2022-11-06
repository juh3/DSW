import http from 'k6/http'

export let options = {
  summaryTrendStats: ['avg', 'med', 'p(99)', 'p(95)'],
  vus: 5,
  duration: '10s',
}
export default function () {
  http.get('http://localhost:7777/cnHrlA') // Change the ending six letters here
}
