/**
 * Format Time String with current locale
 * @param date Date string or number, like '2020.07'
 * @param locale 'en' | 'zh'
 * @returns DateString, like 'Jul 2020'
 * @example
 * ```ts
 * formatDate() = 'Present'
 * formatDate(2017) | formatDate('2017') = '2017'
 * formatDate('2020.07') = 'Jul 2020'
 * formatDate('2020.07', 'zh') = '2020.07'
 * ```
 */
export const formatDate = (
  date?: string | number,
  locale?: 'en' | 'zh' = 'en'
): string => {
  if (typeof date === 'number') {
    return String(date)
  }

  if (!date || typeof date !== 'string') {
    return 'Present'
  }

  if (!date.includes('.')) {
    return date
  }

  if (locale && locale === 'zh') {
    return date
  }

  const dateString = new Date(date).toDateString()
  const [, m, , y] = dateString.split(' ')
  return `${m} ${y}`
}

export const formatTimeRange = ({
  start,
  end,
  locale = 'en',
}: {
  start?: string
  end?: string
  locale?: 'en' | 'zh'
} = {}): string => {
  return `${formatDate(start, locale)} ~ ${formatDate(end, locale)}`
}

export default {
  formatDate,
  formatTimeRange,
}
