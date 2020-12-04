export const toggleQueryString = (str: string, isAppended: boolean) => {
  const searchStr = window.location.search

  if (str === '' || str === null) {
    location.search = ''
  }

  if (isAppended) {
    if (!searchStr.includes(str)) {
      location.search = `${searchStr}${
        searchStr.includes('=') ? '&' : ''
      }${str}`
    }
    return
  }
  if (searchStr.includes(str)) {
    let newStr =
      searchStr.slice(0, searchStr.indexOf(str)) +
      searchStr.slice(searchStr.indexOf(str) + str.length + 1)

    location.search = newStr
  }
}

export default { toggleQueryString }
