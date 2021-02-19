/**
 * Dependencies
 * @requires {@link https://www.npmjs.com/package/buffer Buffer}
 */
import { Buffer } from 'buffer';

/**
 * Create basic authentication
 * @requires {@link https://www.npmjs.com/package/buffer Buffer}
 * @param {string} user 
 * @param {string} password 
 * @returns {string} Basic authentication
 */
export const basicAuth = (user, password) => {
    const buffer = Buffer.from(`${user}:${password}`).toString('base64');
    return `Basic ${buffer}`;
};
