export const formatToParagraphs = (text) => {
  const result = text.trim().split(/\r?\n+/).map((x) => x.trim());
  console.log(result);
  return result;
};