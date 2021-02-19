/**
 * Converts function with callback to promise
 * @param {function} fn - Function to convert 
 * @param  {...any} paramns - Function paramns
 * @returns {Promise} - Success or error from callback
 */
const callbackToPromise = (fn, ...paramns) => (
    new Promise((resolve, reject) => {
        fn(...paramns, (error, ...values) => {
            if (error) reject(error)
            resolve(...values)
        })
    })
)