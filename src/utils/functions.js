export function randomize(value) {
  return Math.floor(Math.random() * value);
}

export function truncate(str, size) {
  return str?.length > size ? `${str.slice(0, size)}...` : str;
}

export function slideLeft(rowId) {
  let slider = document.getElementById(rowId);
  slider.scrollLeft = slider.scrollLeft - 500;
}

export function slideRight(rowId) {
  let slider = document.getElementById(rowId);
  slider.scrollLeft = slider.scrollLeft + 500;
}
