// Capitalize words
function capitalize(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

// variation-1782410896165

// Zip arrays
function zip(a, b) {
  return a.map((v, i) => [v, b[i]]);
}

// variation-1782410902078

// Random ID generator
function generateId() {
  return Math.random().toString(36).slice(2);
}

// variation-1782410935486

