import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const newCategory = (onNewValue) => {
        // console.log(onNewValue);
        //Creamos una validacion para que no se ingrese dos veces el mismo string en el array
        //Con la funcion de replace(/\b[a-z]/g,c=>c.toUpperCase()) nos ayuda a convertir la primer letra de cada palabra en mayuscula
        //Y esto nos permite tambien que al momento que ingresar cualquier string al arreglo se valide que no se repita y en caso de no que se repita tambien salga con cada letra en mayuscula
        if (
            categories.includes(
                onNewValue.replace(/\b[a-z]/g, (c) => c.toUpperCase())
            )
        )
            return;
        //Formas de agregar un valor o elemento a un arreglo en react
        //Forma 1
        setCategories([
            onNewValue.replace(/\b[a-z]/g, (c) => c.toUpperCase()),
            ...categories,
        ]);
        //Forma 2
        // setCategories((categories) => [...categories, 'Digimon']);
        //Forma 3
        // setCategories(categories.concat('Digimon'));
    };

    return (
        <>
            {/* Titulo */}

            <h1>GifExpertApp</h1>

            {/* Input */}

            <AddCategory
                // setCategories={setCategories}
                onNewValue={(event) => newCategory(event)}
            />

            {/* Listado de Gif */}
            {/* las llaves "{ }" representan codigo de javascript pero tambien para hacer notar un comentario  */}

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}

            {/* Gif Item */}
        </>
    );
};
