export const toggleClass = (className, attach: boolean) => {
  const htmlTag = document.querySelector('html')
  if (attach) {
    htmlTag?.classList.add(className)
    return
  }
  htmlTag?.classList.remove(className)
}

export default { toggleClass }
