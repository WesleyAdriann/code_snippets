/**
 * Create basic authentication
 * @param {string} user 
 * @param {string} password 
 * @returns {string} Basic authentication
 */
export const basicAuth = (user, password) => {
    const base = btoa(`${user}:${password}`)
    return `Basic ${base}`;
};