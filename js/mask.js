/**
 * Apply mask in value
 * @example 
 * // return 111 111 111
 * mask(111111111, '### ### ###')
 * @param {string|number} value - value to apply pattern
 * @param {string} pattern - pattern with # to replace to value
 * @returns {string} value with pattern
 */
const mask = (value, pattern) => {
    const stringValue = value.toString()

    let i = 0
    const maskedValue = pattern.replace(/#/g, () => stringValue[i++] || '')

    return maskedValue
}