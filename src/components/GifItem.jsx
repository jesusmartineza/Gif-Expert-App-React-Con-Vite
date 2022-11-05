//Obteniendo las props del componente padre
//Hacemos una destructuracion de las props que hemos esparcido desde el componente padre con ayuda del spread = '...image'

export const GifItem = ({ title, url }) => {
    return (
        <div className='card'>
            <img src={url} alt={title} />
            {/* <p>{title}</p> */}
        </div>
    );
};
