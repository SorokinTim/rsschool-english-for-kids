export function render(element) {
  document.body.appendChild(element);
}

export function clearDOM() {
  document.body.innerHTML = '<script src="main.bundle.js">';
}
