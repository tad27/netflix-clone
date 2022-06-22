export function randomize(value) {
  return Math.floor(Math.random() * value);
}

export function truncate(str, size) {
  return str?.length > size ? `${str.slice(0, size)}...` : str;
}
