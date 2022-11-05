//Componente donde se veran los gif en una cudricula

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading ? <div>Cargando...</div> : null}

            <div className='card-grid'>
                {images.map((image) => (
                    //tecnia para mandar las props de un componente a otro
                    //usando el spread = '...'
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};
