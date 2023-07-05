
export const getGifts = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=fa2qZ57CCfIGftv13QF6R2nm1OtKUIYM&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    // console.log(data);
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    return gifs
  
  }