/* @refresh reload */
import { render } from 'solid-js/web'
import { mul } from '@edsolater/fnkit'

import './index.css'
import App from './App'

const root = document.getElementById('root')

render(() => <App />, root!)

console.time('run origin math::multiply')
for (let i = 0; i < 1000000; i++) {
  i * i
}
console.timeEnd('run origin math::multiply')
console.time('run fnkit mul')
for (let i = 0; i < 1000000; i++) {
  mul(i, i)
}
console.timeEnd('run fnkit mul')
