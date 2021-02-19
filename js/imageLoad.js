/**
 * Creates HTMLImageElement waiting for src load
 * @param {string} src
 * @param {number} width 
 * @param {number} height 
 * @returns {Promise<HTMLImageElement | ErrorEvent>} Promise in success returns HTMLImageElement or error in reject
 */
export const imageLoad = (src, width, height) => (
    new Promise((resolve, reject) => {
        const image = new Image(width, height);
        image.src = src;
        image.onload = () => resolve(image)
        image.onerror = (error) => reject(error)
    })
)