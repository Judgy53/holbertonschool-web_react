/**
 * Gets the year, using local time.
 * @returns {number}
 */
export function getFullYear() {
  return new Date().getFullYear();
}

/**
 * Get footer text
 * @param {boolean} isIndex
 * @returns {string}
 */
export function getFooterCopy(isIndex) {
  if (isIndex === true)
    return 'Holberton School';

  return 'Holberton School main';
}
