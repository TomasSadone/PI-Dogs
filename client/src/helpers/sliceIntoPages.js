export const sliceIntoPages = (arr, chunkSize = 9) => {
  const pages = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const page = arr.slice(i, i + chunkSize);
    pages.push(page);
  }
  return pages;
};
