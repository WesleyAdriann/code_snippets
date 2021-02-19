/**
 * Captilize string
 * @param {string} text
 * @returns {string} Text capitalized
 */
export const capitalize = (text = '') => {
    const textLength = text.length
    if (textLength === 0) return text
    if (textLength < 2) return text.toUpperCase()
    return text.charAt(0).toUpperCase() + text.slice(1)
}