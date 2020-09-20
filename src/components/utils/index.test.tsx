import assert from 'assert'
import { formatDate, formatTimeRange, transformText } from './index'

/**
 * Date Test
 */
assert.strictEqual(formatDate(), 'Present')
assert.strictEqual(formatDate(2017), '2017')
assert.strictEqual(formatDate('2017'), '2017')
assert.strictEqual(formatDate('2020.07'), 'Jul 2020')
assert.strictEqual(formatDate('2020.07', 'zh'), '2020.07')

assert.strictEqual(
  formatTimeRange({
    start: 2017,
    end: 2018,
  }),
  '2017 ~ 2018'
)
assert(
  formatTimeRange({
    start: '2017',
    end: '2018',
  }) === '2017 ~ 2018'
)
assert(
  formatTimeRange({ start: '2019.06', end: '2020.07' }) ===
    'Jun 2019 ~ Jul 2020'
)
assert(
  formatTimeRange({ start: '2019.06', end: '2020.07', locale: 'zh' }) ===
    '2019.06 ~ 2020.07'
)
assert.strictEqual(formatTimeRange(), 'Present ~ Present')

/**
 * Text Test
 */

// assert.strictEqual(
//   transformText('TechStack: `react` + `TypeScript` + `AntD`'),
//   ''
// )

assert.strictEqual(
  transformText('Responsible for something'),
  'Responsible for something'
)
