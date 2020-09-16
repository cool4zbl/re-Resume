/**
 * @description Utils
 */

/**
 * Format Time String
 * @param date Date, like '2020.07'
 * @param locale 'en' | 'zh'
 * @returns Date, like 'Jul 2020'
 */
export const formatDate = (date: Date, locale?: 'en' | 'zh' = 'en'): string => {
  if (locale && locale === 'zh') {
    return date
  }
  const dateString = new Date(date).toDateString()
  const [, m, , y] = dateString.split(' ')
  return `${m} ${y}`
}
