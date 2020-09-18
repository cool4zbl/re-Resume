/**
 * @description Utils
 */

/**
 * Format Time String with current locale
 * @param date Date, like '2020.07'
 * @param locale 'en' | 'zh'
 * @returns Date, like 'Jul 2020'
 * @example
 * ```ts
 * formatDate('2020.07') = 'Jul 2020'
 * formatDate('2020.07', 'zh') = '2020.07'
 * ```
 */
export const formatDate = (date: Date, locale?: 'en' | 'zh' = 'en'): string => {
  if (locale && locale === 'zh') {
    return date
  }
  const dateString = new Date(date).toDateString()
  const [, m, , y] = dateString.split(' ')
  return `${m} ${y}`
}
