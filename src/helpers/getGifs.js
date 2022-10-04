const apiKey = 'dOTe4mLL8dkHzZT1UAmooK5qFoXqmMvF';
const imageLimit = 10;
const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${imageLimit}&q="`;

export const getGifs = async (category) => {
    const requestUrl = encodeURI(`${baseUrl}${category}`);
    const response = await fetch(requestUrl);
    const {data = []} = await response.json();

    return data.map( img => 
        ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
    );

  }