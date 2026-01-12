export const formatToParagraphs = (text) => {
  const result = text
    ? text
        .trim()
        .split(/\r?\n+/)
        .map((x) => x.trim())
    : []
  return result
}
