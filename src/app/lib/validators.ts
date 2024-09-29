export function isValidHttpUrl(urlString: string) {
  try {
    const newUrl = new URL(urlString);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    console.log(err);
    return false;
  }
}
