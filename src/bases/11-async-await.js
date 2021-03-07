const getImagen = async () => {

    try {
        const apiKey = 'puvheGF2U8EIXwmjP4iZbwsoqUj0d9cH'
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch( err ) {
        console.error( err );
    }    
    
}

getImagen().then();



/*
peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );*/