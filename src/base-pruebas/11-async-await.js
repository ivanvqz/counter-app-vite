
export const getImagen = async() => {

    try {

        const apiKey = '3U94HqY3L7aG9lX3gY7leG0AOo9uYsYE';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        // manejo del error
        // console.log(error)
        return 'no se encontró la imagen'
    }
    
    
    
}

getImagen();



