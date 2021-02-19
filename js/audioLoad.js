/**
 * Create HTMLAudioElement waiting for src load
 * @param {string} url
 * @param {boolean} autoplay - default is false
 * @returns {Promise<HTMLAudioElement | ErrorEvent>} Promise in success returns HTMLAudioElement or error in reject
 */
export const audioLoad = (url, autoplay = false) => (
    new Promise((resolve) => {
        const audio = new Audio(url);
        audio.autoplay = autoplay;
        audio.addEventListener('loadeddata', () => resolve(audio));
        audio.addEventListener('error', reject)
    })
)