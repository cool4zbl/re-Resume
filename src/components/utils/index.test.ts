import assert from 'assert'
import { formatDate } from './index'

assert(formatDate() === 'Present')
assert(formatDate(2017) === '2017')
assert(formatDate('2017') === '2017')
assert(formatDate('2020.07') === 'Jul 2020')
assert(formatDate('2020.07', 'zh') === '2020.07')
