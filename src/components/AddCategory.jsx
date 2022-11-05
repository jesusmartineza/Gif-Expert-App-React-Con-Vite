import { useState } from 'react';

export const AddCategory = ({ onNewValue }) => {
    const [inputValue, setInputValue] = useState('');

    const inputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue(target.value);
    };

    const inputSubmit = (event) => {
        event.preventDefault();
        //Validacion para no aceptar el campo en blanco y mas de 1 letra
        if (inputValue.trim().length <= 1) return;
        //insertando un nuevo valor dentro del arreglo categorias desde este componente
        // setCategories((categories) => [inputValue, ...categories]);
        //Forma mas simple de mandar el valor a componente padre
        onNewValue(inputValue.trim());
        //Limpiando el input para nuevo valor
        setInputValue('');
    };

    return (
        <form onSubmit={inputSubmit}>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={inputChange}
            />
        </form>
    );
};
