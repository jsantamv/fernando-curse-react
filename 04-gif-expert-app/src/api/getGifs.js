

/**
 * Get Gifs by category
 * @param {Category GIF} category 
 * @returns Object with GIFs
 */
const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=atNkNWj0XwuREvDt3Rbg4zzp8SN3Dhzs&q=${category}&limit=10`
    const result = await fetch(url);
    const { data = [] } = await result.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs);
    return gifs;
}

export { getGifs };